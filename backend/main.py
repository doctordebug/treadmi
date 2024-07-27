import RPi.GPIO as GPIO
import board
import busio
import adafruit_mcp4725
import time
from flask import Flask, jsonify
from flask_cors import CORS

i2c = busio.I2C(board.SCL, board.SDA)
dac = adafruit_mcp4725.MCP4725(i2c)

#tread mill status
total_pulses = 0
# 0V = stop / 5V = max speed
current_kmh = 0
max_kmh = 20
volts_per_kmh = 5.0 / max_kmh
current_volts = 0

# we increase the kmh step-by-step
seconds_per_kmh_change = 0.5

# detect speed
'''
ENCODER_PIN_A = 14
ENCODER_PIN_B = 15

GPIO.setmode(GPIO.BCM)
GPIO.setup(ENCODER_PIN_A, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(ENCODER_PIN_B, GPIO.IN, pull_up_down=GPIO.PUD_UP)

last_a = GPIO.input(ENCODER_PIN_A)


def encoder_callback(channel):
    global total_pulses, last_a
    a = GPIO.input(ENCODER_PIN_A)
    b = GPIO.input(ENCODER_PIN_B)
    print(f"a: {a} - b:{b} - last_a: {last_a}")
    total_pulses+=1
    print(f"total pulses  {total_pulses}")
    
GPIO.add_event_detect(ENCODER_PIN_A, GPIO.BOTH, callback=encoder_callback, bouncetime=1)
GPIO.add_event_detect(ENCODER_PIN_B, GPIO.BOTH, callback=encoder_callback, bouncetime=1)
'''

#set speed (well... actually voltage, nvm)
def set_voltage(volts):
    if volts < 0 or volts > 5:
        raise ValueError('Voltage must be between 0 and 5 V')
    value = int ((volts / 5.0) * 65535)
    dac.value = value
    

def set_speed(kmh_dest):
    #changing speed step-by-step (negative value = slow down)
    global current_kmh
    global seconds_per_kmh_change
    global volts_per_kmh
    global current_volts
    start_volts = current_volts
    kmh_difference = kmh_dest - current_kmh
    if kmh_difference == 0:
        return
    
    volts_difference = (kmh_difference) * volts_per_kmh

    steps = int (kmh_difference / seconds_per_kmh_change)
    increaseByStep = volts_difference / steps

    for s in range (0,steps):
        start_volts += increaseByStep
        new_voltage = start_volts
        set_voltage(new_voltage)
        print(f"set voltage to {new_voltage}V - step: {s} of {steps}")
        time.sleep(seconds_per_kmh_change)
        current_kmh = start_volts / volts_per_kmh
        current_volts = start_volts


app = Flask(__name__)
cors = CORS(app)

@app.route('/api/start', methods=['POST'])
def start():
    set_speed(12)
    return jsonify(speed=current_kmh, volts = current_volts)

@app.route('/api/pause', methods=['POST'])
def pause():
    set_speed(0)
    return jsonify(speed=current_kmh, volts = current_volts)

@app.route('/api/stop', methods=['POST'])
def stop():
    set_speed(0)
    return jsonify(speed=current_kmh, volts = current_volts)

@app.route('/api/status', methods=['GET'])
def status():
    return jsonify(speed=current_kmh, volts = current_volts)






if __name__ == '__main__':
    try:
        app.run(host='0.0.0.0', port=5000)
    except KeyboardInterrupt:
          print('Server Stopped')
          GPIO.cleanup()
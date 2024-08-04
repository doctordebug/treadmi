
export const pretifyMeters = (meter: number)=>{
    const partialMeters = meter % 1000
    return Math.round(meter / 1000) + "." + ('000'+Math.round(partialMeters)).slice(-3)
  }
  
export const pretifySeconds = (millis: number) => {
    const seconds = Math.round(millis / 1000) 
    const minutes = Math.round(seconds / 60) 
    const hours = Math.round(minutes / 60)

    return `${('0'+hours).slice(-2)}:${('0'+minutes % 60).slice(-2)}:${('0'+seconds % 60).slice(-2)}`
  }
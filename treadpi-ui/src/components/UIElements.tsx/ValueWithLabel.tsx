import * as React from 'react';

interface IValueWithLabelProps {
  value: string,
  unit:string,
  description: string
}

const ValueWithLabel = (props:IValueWithLabelProps) => {

    return (
      <div className='valueWithLabel'>
        <div className='description'>{props.description}</div>
        <div className='unit'>{props.unit}</div>
        <div className='value'>{props.value}</div>
      </div>
    )
}

export default ValueWithLabel;
import React from 'react'
import './InputField.css';

const InputField = ({type, placeholder, width, height, textAlign, padding}) => {
  return (
    <input type={type} placeholder={placeholder} style={{width: width, height: height, textAlign: textAlign, padding: padding}} />
  )
}

export default InputField

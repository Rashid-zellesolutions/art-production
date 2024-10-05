import React from 'react'
import './InputField.css';

const InputField = ({
    type, 
    placeholder, 
    width, 
    height, 
    textAlign, 
    padding, 
    borderRadius,
    fontSize,
    fontWeight,
    lineHeight,
    color
  }) => {

  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      style={{
        width: width, 
        height: height, 
        textAlign: textAlign, 
        padding: padding,
        borderRadius: borderRadius,
        fontSize: fontSize,
        lineHeight: lineHeight,
        fontWeight: fontWeight,
        color: color,
      }} 
    />
  )
}

export default InputField

import React from 'react'
import './PrimeryButton.css';

const PrimeryButton = ({text, width, height, padding}) => {
  return (
    <button className='main-button' style={{width: width, height: height, padding: padding}}>
        {text}
    </button>
  )
}

export default PrimeryButton

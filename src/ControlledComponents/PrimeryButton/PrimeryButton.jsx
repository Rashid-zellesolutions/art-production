import React from 'react'
import './PrimeryButton.css';

const PrimeryButton = ({text, width, height}) => {
  return (
    <button className='main-button' style={{width: width, height: height}}>
        {text}
    </button>
  )
}

export default PrimeryButton

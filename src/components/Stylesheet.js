import React from 'react'
import './Mystyles.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <h2 className = { `${className} font-XL`}> Stylesheet</h2>
  )
}

export default Stylesheet
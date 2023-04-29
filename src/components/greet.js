import React, {useState} from 'react'

const Greet = (props) => {

  const {name, heroname, children} = props;
  const [isButtonMessage, setIsButtonMessage] = useState('Please click on the button to change this message');

  function onButtonClick() { 
    setIsButtonMessage("Button is working")
  }

  return (
    <div> 
      <h1> Hello {name} and {heroname}</h1>
      <button onClick={onButtonClick}> Click</button>
      {isButtonMessage}
      {children}
    </div>
  )
}

export default Greet



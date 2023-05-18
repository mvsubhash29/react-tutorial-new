import React from 'react';

const ButtonDemo = ({children, handleClick}) => {
  console.log('Rendering button - ', children);
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export const Button = React.memo(ButtonDemo)
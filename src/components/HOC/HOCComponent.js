import React, {useState} from 'react';

export const wrappedHocComponent = (WrappedComponent) => {
  

  return function (props) {
    const [count, setCount] = useState(0);

    return (
      <WrappedComponent {...props} count={count} setCount={setCount} />
    )
  }
}
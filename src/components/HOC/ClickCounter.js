import React from 'react';
import { wrappedHocComponent } from './HOCComponent';

const ClickCounter = (props) => {
  // const [count, setCount] = useState(0);
  const {count, setCount, name} = props;

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{name} {count}</button>
    </>
  )
}

export default wrappedHocComponent(ClickCounter);
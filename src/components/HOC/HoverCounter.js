import React from 'react';

import {wrappedHocComponent} from './HOCComponent'

const HoverCounter = (props) => {
  // const [count, setCount] = useState(0)
const {count, setCount, name} = props;
  return (
    <>
      <h3 onMouseEnter={() => setCount(count + 1)}>{name} {count}</h3>
    </>
  )
}

export default wrappedHocComponent(HoverCounter)
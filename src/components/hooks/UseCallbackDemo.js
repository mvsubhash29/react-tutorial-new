import {useState, useCallback} from 'react';
import { Title } from './Title';
import { Count } from './Count';
import { Button } from './Button';
// eliminates unnecessary rendering of the child when parent changes
// when we pass callback functions as props
export const UseCallbackDemo = () => {
  const [age, setAge] = useState(30);
  const [count, setCount] = useState(1);

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <Title title='use callback demo' />
      <Count title='age' value={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count title='count' value={count} />
      <Button handleClick={incrementCount}>Increment Count</Button>
    </>
  )
}

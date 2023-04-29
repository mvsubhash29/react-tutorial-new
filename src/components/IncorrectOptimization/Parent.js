import React, {useState} from 'react';
import { MemorizedChild } from './Child';

export const Parent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Subhash');

  console.log('Parent Render');
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Hyderabad')}>Change name</button>
      <MemorizedChild name={name} />
    </div>
  )
}


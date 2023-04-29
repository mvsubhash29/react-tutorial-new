import React, { useContext } from 'react';
import { UserContext } from './Context';

export const Child = () => {
  const username = useContext(UserContext);
  
  return (
    <>
      <div>Child context component {username}</div>
    </>
  )
}
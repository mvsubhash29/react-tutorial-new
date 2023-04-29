import React from 'react';
import { Child } from './Child';
import { UserContext } from './Context';

export const Parent = () => {
  return (
    <>
      <h1>Parent context component</h1>
      <Child />
      <UserContext.Consumer>
        {
          (user) => <div>{user} from parent</div>
        }
      </UserContext.Consumer>
    </>
  )
}
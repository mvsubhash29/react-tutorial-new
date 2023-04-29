import React from 'react';
import { Parent } from './Parent';

export const UserContext = React.createContext();

export const Context = () => {
  return (
    <UserContext.Provider value="Dimple">
      <Parent />
    </UserContext.Provider>
  )
}
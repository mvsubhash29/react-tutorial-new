import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export const HOC = () => {
  return (
    <>
      <h1>HOC Demo</h1>
      <ClickCounter name='Click Demo' />
      <HoverCounter name='Hover Demo' />
    </>
  )
}
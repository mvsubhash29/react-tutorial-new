import React from 'react';

export const Child = () => {
  console.log('Child render');
  return <div>Child component</div>
}

export const MemorizedChild = React.memo(Child);
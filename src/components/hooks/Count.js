import React from 'react';

const CountDemo = ({title, value}) => {
  console.log('Rendering count - ', title);

  return (
    <div>{title} - {value}</div>
  )
}

export const Count = React.memo(CountDemo);
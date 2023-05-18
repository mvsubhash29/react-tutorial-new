import React from 'react';
const TitleDemo = ({title}) => {
  console.log('Rendering title component');
  
  return (
    <div>{title}</div>
  )
}
export const Title = React.memo(TitleDemo)
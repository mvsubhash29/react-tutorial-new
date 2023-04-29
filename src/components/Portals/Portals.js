import React from 'react';
import ReactDOM from 'react-dom';

export const PortalDemo = () => {
  return ReactDOM.createPortal(
    <>
      <h1 style={{color: 'red'}}>Portal Demo</h1>
    </>,
    document.getElementById('portal-root')
  )
}
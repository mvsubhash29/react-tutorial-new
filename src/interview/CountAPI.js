import React, { useEffect } from 'react';

export const CountAPI = () => {

  const statusRef = React.useRef('firstAPICall')

  const fetchImage = () => {
    statusRef.current = 'resetAPICall'
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(response => {
      statusRef.current = 'successAPICall'
      console.log(response)
    });
  }

  useEffect(() => {
    fetchImage();
    const intervalId = setInterval(() => {
      if (statusRef.current === 'successAPICall') {
        fetchImage()
      }
    }, 10)

    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return (
    <>Counter API</>
  )
}
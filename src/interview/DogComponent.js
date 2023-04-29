import React, {useState, useEffect} from 'react';

export const DogComponent = () => {
  const [dogState, setDogState] = useState({
    page: undefined,
    images: [],
  });

  useEffect(() => {
    console.log(dogState)
  }, [dogState])

  useEffect(() => {
    fetchImage();
  }, [])

  const fetchImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(response => {
      setDogState((currentState) => ({...currentState, images: [...currentState.images, response.message], page: currentState.page !== undefined ? currentState.page + 1 : 0}));
    });
  }

  const onHandlePrevious = () => {
    if (dogState.page > 0) {
      setDogState((currentState) => ({...currentState, page: currentState.page - 1}));
    }
  }

  const onHandleNext = () => {
    fetchImage()
  }

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '95vh'}}>
        <img width={100} height={100} src={dogState.page !== undefined && dogState.images[dogState.page]} />
      </div>
      {dogState.page > 0 && <button onClick={() => onHandlePrevious()}>Previous</button>}
      <button onClick={() => onHandleNext()}>Next</button>
    </>
  )


}


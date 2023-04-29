import React, {useState} from 'react';

const ConditionalRendering = () => {
  const [gender, setGender] = useState('male');
console.log('Gender - ', gender);
  function onGenderChange() {
    setGender(gender === 'male' ? 'female' : 'male');
  }

  return (
    <>
      <h1>Headin</h1>
      {
        gender === 'male' ? <div>Woooo!! it is male</div> : <div>offfff!! it is female</div>
      }
      <button onClick={onGenderChange}>{gender}</button>
    </>
  )
}

export default ConditionalRendering;
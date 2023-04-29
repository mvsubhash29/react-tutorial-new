import React from 'react';

function Address(props) {
  const {address1, address2, pincode} = props;

  return (
    <>
      <p>Address1: {address1}</p>
      <p>Address2: {address2}</p>
      <p>Pincode: {pincode}</p>
    </>
  )
}

export default Address;

import React from 'react';

const PersonsList = () => {
  const names= ['apple', 'Ball', 'Cat', 'apple']
  const persons = [{
    name: "Dimpi",
    age: 24
  }, {
    name: "Subhash",
    age: 29
  }]

  const NamesList = names.map ( (name, unique) => <h2 key={unique}>{name}</h2>)
  const persons1 = persons.map((person, index) => <div key={index}> person name is {person.name} and age is {person.age}</div>)
  return ( 
    <>
      <h1> Header</h1>
      {persons1}
      {NamesList}
    </>
    )
}

export default PersonsList
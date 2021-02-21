import React, { useState } from 'react';

import './AddPerson.css';

const addPerson = (props) => {
   const [name, setName] = useState('');
   const [age, setAge] = useState('');

   const nameChangeHandler = (event) => {
      setName(event.target.value);
   };

   const ageChangeHandler = (event) => {
      setAge(event.target.value);
   };

   const restoreFields = () => {
      setAge('');
      setName('');
   }

   return (
      <div className="AddPerson">
         <input type='text' placeholder='Name' value={name} onChange={nameChangeHandler} />
         <input type='number' placeholder='Age' value={age} onChange={ageChangeHandler} />
         <button onClick={() => { props.personAdded(name, age); restoreFields(); }}>Add Person</button>
      </div>
   );
};

export default addPerson;
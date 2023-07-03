import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const ageChangeHandler = event => {
    setEnteredAge(event.target.value);
  };

  const nameChangeHandler = event => {
    setEnteredName(event.target.value);
  };


  const formSubmitHandler = event => {
    event.preventDefault();
    const dataobj = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString()
    };
    props.onAddUser(dataobj);
    setEnteredAge('');
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Username</label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
        <label>Age(Years)</label>
        <input type='number' value={enteredAge} min='0'step='0.1' onChange={ageChangeHandler} />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default CourseInput;

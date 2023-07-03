import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [usersData, setUsersData] = useState([]);

  const addUserHandler = userData => {
    setUsersData(prevData => {
      const updatedData = [userData, ...prevData];
      return updatedData;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No user data found. Maybe add one?</p>
  );

  if (usersData.length > 0) {
    content = (
      <CourseGoalList items={usersData}/>
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddUser={addUserHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;

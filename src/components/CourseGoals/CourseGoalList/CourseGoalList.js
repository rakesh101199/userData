import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = props => {


  return (
    <ul className="goal-list">
      {props.items.map(data => (
        <CourseGoalItem
          key={data.id}
          id={data.id}
        >
          {`${data.name}(${data.age} years Old)`}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;

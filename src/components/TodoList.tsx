import input from '../db/people.json';
import React from 'react';

const TodoList: React.FC = () => {
  const { people } = input;

  const displayNames = () => {
    return people.map((person, index) => <li key={index}>{person.last}, {person.first}</li>)
  }

  return (
    <div className="names-list">
      <h1>List of names</h1>
      <ul>
        {displayNames()}
      </ul>
    </div>
  )
}

export default TodoList
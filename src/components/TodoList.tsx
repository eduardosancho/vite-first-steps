import input from '../db/people.json';
import React from 'react';
import { Todo } from '../model';
import '../styles/TodoList.scss'

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const { people } = input;

  const displayNames = () => {
    return people.map((person, index) => <li key={index}>{person.last}, {person.first}</li>)
  }

  return (
    <>
      <div className="todos">
        {todos.map(todo => <li>{todo.todo}</li>)}
      </div>
      <div className="names">
        <h1>Names List</h1>
        <ul>
          {displayNames()}
        </ul>
      </div>
    </>
  )
}

export default TodoList
import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import '../styles/TodoCard.scss'

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='todos__card'>
      <span className="todos__card--text">{todo.todo}</span>
      <div>
        <span className="icon"><AiFillEdit /></span>
        <span className="icon"><AiFillDelete /></span>
        <span className="icon"><MdDone /></span>
      </div>
    </form>
  )
}

export default TodoCard
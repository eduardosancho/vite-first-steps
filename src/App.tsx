import './styles/App.scss'
import React, { useState } from 'react'
import NameList from './components/NameList'
import InputField from './components/InputField'
import { Todo } from './model'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  console.log(todo);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <NameList />
    </div>
  )
}

export default App

import './styles/App.scss'
import React, { useState } from 'react'
import TodoList from './components/TodoList'
import InputField from './components/InputField'
import { Todo } from './model'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map(t => <li key={t.id}>{t.todo}</li>)}
      <TodoList />
    </div>
  )
}

export default App

import './styles/App.scss'
import NameList from './components/NameList'
import InputField from './components/InputField'
import { useState } from 'react'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
      <NameList />
    </div>
  )
}

export default App

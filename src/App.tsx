import './styles/App.scss'
import NameList from './components/NameList'
import InputField from './components/InputField'

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
      <NameList />
    </div>
  )
}

export default App

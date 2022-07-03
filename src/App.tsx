import './styles/App.css'
import NameList from './components/NameList'

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <NameList />
    </div>
  )
}

export default App

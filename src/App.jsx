import { useState } from 'react'
import './App.css'
import SearchBar from './assets/Components/SearchBar/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SearchBar />
    </div>
  )
}

export default App

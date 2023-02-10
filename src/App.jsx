import { useState } from 'react'
import './App.css'
import SearchBar from './assets/Components/SearchBar/SearchBar'
import Heading from './assets/Components/Heading/Heading'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Heading />
      <SearchBar />
    </div>
  )
}

export default App

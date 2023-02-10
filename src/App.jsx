import { useState } from 'react'
import './App.css'
import SearchApp from './assets/Components/SearchBar/SearchApp'
import Heading from './assets/Components/Heading/Heading'
import './Themes.css'
const App = () => {
  const [mode, setMode] = useState('dark');

  const handleModeToggle = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className={`App ${mode}`}>
      <Heading mode={mode} onToggle={handleModeToggle} />
      <div className='content'>
        <SearchApp />
      </div>
    </div>
  );
};

export default App;

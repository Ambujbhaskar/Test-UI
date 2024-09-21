import { useState } from 'react'
import './App.css'
import { processKeydown } from './App.helper';
import Sidebar from './components/Sidebar';
import StatusBar from './components/StatusBar';

function App() {
  const [count, setCount] = useState(0);
  const [selectedChars, setSelectedChars] = useState(0);


  return (
    <main
      className='main'
      tabIndex={0}
      onKeyDown={(e: React.KeyboardEvent) => processKeydown(e, setCount, count)}
      onMouseUp={() => {
        setSelectedChars(window.getSelection()?.toString()?.length || 0);
      }}
      onKeyUp={() => {
        setSelectedChars(window.getSelection()?.toString()?.length || 0);
      }}
    >
      <Sidebar />
      <span className='content'>
        <h1>LETS GOO</h1>
        <h2>{count}</h2>
      </span>
      <StatusBar selectedChars={selectedChars} />
    </main>
  )
}

export default App

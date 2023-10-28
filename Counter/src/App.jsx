import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [x, setx] = useState(0)


  const addValue = () => {
    setCount(count + 1)
  }

  const decValue = () => {
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={addValue}>Add value {count}</button>
      <button onClick={decValue}>Dec value {count}</button>
      Count:x {x} 
      <button onClick={()=> setx(x+1)}>Inc</button>
     <button onClick={()=> setx(x-1)}>Dec</button>
    </>
  )
}

export default App

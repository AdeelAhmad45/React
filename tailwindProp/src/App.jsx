import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
      <Card name="Macbook" btn="Read" />
      <Card name="Dell" btn="Read" />
      <Card name="Asus" btn="Read" />
      </div>
      
      
    </>
  )
}

export default App

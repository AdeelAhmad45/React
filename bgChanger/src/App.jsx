import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    
   <div className="w-full h-screen duration-200 "
   
    style={{backgroundColor: color}}> 
    <div className='  fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap px-3 py-2 justify-center gap-3 bg-white rounded-3xl text-white shadow-lg'>
        <button onClick={() => setColor("Red")} className='outline-none ease-in duration-300  animate-bounce px-4 py-1 rounded-full' style={{backgroundColor: "Red"}}>Red</button>
        <button onClick={() => setColor("Pink")} className='outline-none animate-bounce px-4 py-1 rounded-full' style={{backgroundColor: "Pink"}}>Pink</button>
        <button onClick={() => setColor("Green")} className='outline-none animate-bounce px-4 py-1 rounded-full' style={{backgroundColor: "Green"}}>Green</button>
        <button onClick={() => setColor("Blue")} className='outline-none animate-bounce px-4 py-1 rounded-full' style={{backgroundColor: "Blue"}}>Blue</button>
        <button onClick={() => setColor("Purple")} className='outline-none animate-bounce px-4 py-1 rounded-full' style={{backgroundColor: "Purple"}}>Purple</button>
        <button onClick={() => setColor("Black")} className='outline-none animate-bounce px-4 py-1 rounded-full' style={{backgroundColor: "Black"}}>Black</button>
      </div>
    </div>
   </div>
  )
}

export default App

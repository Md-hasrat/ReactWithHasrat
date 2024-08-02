import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 bg-red-700 rounded-full text-white shadow-lg'>Red</button>
          <button onClick={()=> setColor("green")} className='outline-none px-4 bg-green-900 rounded-full text-white shadow-lg'>Green</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-4 bg-blue-900 rounded-full text-white shadow-lg'>Blue</button>
          <button onClick={()=> setColor("orange")} className='outline-none px-4 bg-orange-700 rounded-full text-white shadow-lg'>Orange</button>
        </div>
      </div>
     </div>
  )
}

export default App

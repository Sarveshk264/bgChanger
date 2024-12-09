import './App.css'
import { useState } from 'react';

function App() {

  const [color, setColor] = useState('red');

  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor: color}}>
      <div className='fixed w-full flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white bg-red-500 shadow-lg'>RED</button>
          <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white bg-green-500 shadow-lg'>GREEN</button>
          <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white bg-blue-500 shadow-lg'>BLUE</button>
        </div>
      </div>
    </div>
  )
}

export default App

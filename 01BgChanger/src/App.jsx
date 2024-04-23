import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div 
      className='w-full h-screen'
      style={{backgroundColor: color}}
    >
      <div 
        className='flex fixed bottom-12 flex-wrap justify-center inset-x-0 px-2'
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button 
            className='outline-none px-3 py-1 rounded-full text-white'
            style={{backgroundColor: 'red'}}
            onClick={()=> setColor('red')}
          >
            Red
          </button>
          <button 
            className='outline-none px-3 py-1 rounded-full text-white'
            style={{backgroundColor: 'geeen'}}
            onClick={()=> setColor('green')}
          >
            Green
          </button>
          <button 
            className='outline-none px-3 py-1 rounded-full text-white'
            style={{backgroundColor: 'blue'}}
            onClick={()=> setColor('blue')}
          >
            Blue
          </button>
          <button 
            className='outline-none px-3 py-1 rounded-full text-white'
            style={{backgroundColor: 'olive'}}
            onClick={()=> setColor('olive')}
          >
            Olive
          </button>
          <button 
            className='outline-none px-3 py-1 rounded-full text-white'
            style={{backgroundColor: 'gray'}}
            onClick={()=> setColor('gray')}
          >
            Gray
          </button>
          <button 
            className='outline-none px-3 py-1 rounded-full text-black'
            style={{backgroundColor: 'yellow'}}
            onClick={()=> setColor('yellow')}
          >
            Yellow
          </button>
          <button 
            className='outline-none px-3 py-1 rounded-full text-black'
            style={{backgroundColor: 'pink'}}
            onClick={()=> setColor('pink')}
          >
            Pink
          </button>
          <button 
            className='outline-none px-3 py-1 rounded-full text-white'
            style={{backgroundColor: 'purple'}}
            onClick={()=> setColor('purple')}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

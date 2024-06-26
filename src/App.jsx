
import { useState } from 'react'
import './App.css'
import Home from './Home'

function App() {
  const [ para, setPara] = useState([''])

  return (
    <>
    <div className='w-screen p-10'>
      {para.join('')}
    </div>
     <Home para={para} setPara={setPara}/>
    </>
  )
}

export default App

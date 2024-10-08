import { useState } from 'react'
import './App.css'

function App() {
const [count,setCount] = useState(0)

  return (
    <>
   <div className="card">
    <h2>Count: {count}</h2>
    <button onClick={()=>{setCount(count + 1)}}>increase</button>
    <button onClick={()=>{setCount(count - 1)}}>decrease</button>
    <button onClick={()=>{setCount(0)}}>Reset</button>
   </div>
    </>
  )
}

export default App

import { useState,useEffect } from 'react'
import './App.css'
import AddInput from './Components/AddInput'
import Display from './Components/Display'

function App() {

  const [ items , setItems] = useState([]);
  const [completed , setCompleted] = useState([]);
  
  
  return (
    <>
      <AddInput items={items} setItems={setItems} completed={completed} setCompleted={setCompleted}></AddInput>
      <Display items={items} setItems={setItems} completed={completed} setCompleted={setCompleted}></Display>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import './assets/PersonCard.jsx'
import Person from './assets/PersonCard.jsx'

function App() {
  return (
    <>
      <Person name= {"Dejvid Manuka"} age={21} hC={"dark brown"} />
      <Person name= {"Ana"} age={20} hC={"brown"} />
      <Person name= {"AD"} age={50} hC={"black"} />
    </>
  )
}

export default App

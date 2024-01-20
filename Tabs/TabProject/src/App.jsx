import { useState } from 'react'
import './App.css'
import Tabs from './Components/Tabs'

function App() {

  return (
    <>
      <Tabs arr={['tab 1 content', 'tab 2 content','tab 3 content']}></Tabs>
    </>
  )
}

export default App

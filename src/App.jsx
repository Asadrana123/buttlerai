import { useState } from 'react'
import './App.css'
import Slider from './components/Slider'
import WaitlistButton from './components/WaitListButton'
import Form from './components/Form'
function App() {

  return (
    <div>
          <h1>Your AI butler.</h1>
          <p>We search the internet to find opportunities for you.</p>
          <Slider/>
          <WaitlistButton/>
    </div>
  )
}

export default App

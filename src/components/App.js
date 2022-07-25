import images from '../images.png'
import React from 'react'
import CarForm from './CarForm'

function App() {
  return (
    <div>
       <img src={images} style={{width:"300px"}} alt="car Pic"/>
       <h1>React Car App</h1>
       <CarForm/>
    </div>
  )
}

export default App
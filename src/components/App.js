import images from '../images.png'
import React from 'react'
import CarForm from './CarForm'
import useStyles from './Styles'
import DisplayCars from './DisplayCars'
import {useState,useEfect} from 'react'

function App() {
  const [cars, setCars]=useState([])

  

 const styles=useStyles();

  return (
    <div className={styles.app}>
       <h1 className={styles.heading}>React Car App</h1>
       <img src={images} style={{width:"300px"}} alt="car Pic"/>
       <CarForm classes={styles.app} textStyle={styles.textField} button={styles.buttonField}/>
       <DisplayCars/>
    </div>
  )
}

export default App
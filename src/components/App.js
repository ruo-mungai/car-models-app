import images from '../images.png'
import React from 'react'
import CarForm from './CarForm'
import useStyles from './Styles'
import DisplayCars from './DisplayCars'
import {useState,useEffect} from 'react'

function App() {
   const styles=useStyles();

  const [cars, setCars]=useState([])

  function addCar(newCar) {
    setCars([...cars, newCar])
  }

  useEffect(() => {
    fetch("http://localhost:3000/cars")
    .then(response => response.json())
    .then((data) => {
      setCars(data)
    
    })
  }, [])
  
  return (
    <div className={styles.app}>
       <h1 className={styles.heading}>React Car App</h1>
       <img src={images} style={{width:"300px"}} alt="car Pic"/>
       <CarForm classes={styles.app} textStyle={styles.textField} button={styles.buttonField} addCar={addCar}/>
       <DisplayCars myCars={cars} style={styles.app} button={styles.buttonField} setCars={setCars} id={cars.id}/>
    </div>
  )
}

export default App
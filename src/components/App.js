import images from '../images.png'
import React from 'react'
import CarForm from './CarForm'
import useStyles from './Styles'
import DisplayCars from './DisplayCars'
import {useState,useEffect} from 'react'
import SearchAppBar from './SearchAppBar'
import { Route, Routes } from "react-router-dom";


function App() {
   const styles=useStyles();

  const [cars, setCars]=useState([])

  const [searchCar,setSearch]=useState("")
   
  

  const search=(data)=>(
    data.filter((car)=>(car.Make.toLowerCase().includes(searchCar)) || (car.Model.toLowerCase().includes(searchCar))
  )) 

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
    <div >
       <SearchAppBar images={images} classes={styles} setSearch={setSearch} />
       <Routes>
         <Route exact path="/form" element=
       {<CarForm classes={styles.app} textStyle={styles.textField} button={styles.buttonField} addCar={addCar}/>}
       />
        <Route exact path="/" element=
       {<DisplayCars myCars={cars} classes={styles} button={styles.buttonField} setCars={setCars} id={cars.id} getMake={search(cars)}/>}
       />
      </Routes>
    </div>
  )
}

export default App
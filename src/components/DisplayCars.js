import React from 'react'

function DisplayCars({myCars,styles}) {
  const myCar=myCars.map((car)=>(
    <div className={styles}key={car.id}>
      <h3>{car.Make}</h3>
     <h4>{car.Model}
     {car.Origin}
      {car.Year}
      {car.Car_Info}</h4>
    </div>
  ))
  return (
    <div >
     {myCar}
    </div>
  )
}

export default DisplayCars
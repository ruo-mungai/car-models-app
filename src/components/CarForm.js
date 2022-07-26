import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useState} from 'react'


function CarForm({classes , textStyle, button,addCar}) {

  const [carForm, setCarForm] = useState({
    Make: "", Model: "", Origin: "",Year:"", Info:"",image:""
  });

   function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({Make: carForm.Make, Model:carForm.Model, Origin:carForm.Origin,Year:carForm.Year, Info:carForm.Info,image:carForm.image})
    })
    .then(response => response.json())
    .then(data => {
      addCar(data)
      setCarForm({...carForm, Make: "", Model: "", Origin: "",Year:"", Info:"",image:""})
    })
  }
  
  return (
    <div  >
        <h2>Add Car Form</h2>
        <form  className={classes} >
       <TextField id="outlined-basic" label="Make" variant="outlined" className={textStyle}  />
       <TextField id="outlined-basic" label="Model" variant="outlined" className={textStyle} />
       <TextField id="outlined-basic" label="Origin" variant="outlined" className={textStyle} />
       <TextField id="outlined-basic" label="Year" variant="outlined" className={textStyle} />
        <TextField id="outlined-basic" label="Car Info" variant="outlined" className={textStyle} />
         <TextField id="outlined-basic" label="Image URL" variant="outlined" className={textStyle} />
        <Button variant="contained" color="secondary" className={button} onClick={handleSubmit}> Add a Car</Button >
        </form>
    </div>
  )
}

export default CarForm
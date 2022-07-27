import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useState} from 'react'


function CarForm({classes , textStyle, button,addCar}) {

  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [origin, setOrigin] = useState("")
  const [year, setYear] = useState("")
  const [Type, setType] = useState("")
  const [image, setImage] = useState("")
  
   function handleSubmit(event) {
    event.preventDefault();
    let newCar={
      Make:make,
      Model:model,
      Origin:origin,
      Year:year,
      Type:Type,
      image:image
    }

    fetch("http://localhost:3000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar)
    })
    .then(response => response.json())
    .then(data => {
     addCar(data) 
    })
    setMake("")
    setModel("")
    setOrigin("")
    setYear("")
    setType("")
    setImage("")
     
  
  }
  
  return (
    <div className={classes}>
        <h2>Add Car Form</h2>
       <TextField id="outlined-basic" label="Make" variant="outlined" className={textStyle} onChange={(e) => setMake(e.target.value)} value={make} />
       <TextField id="outlined-basic" label="Model" variant="outlined" className={textStyle} onChange={(e) => setModel(e.target.value)} value={model} />
       <TextField id="outlined-basic" label="Origin" variant="outlined" className={textStyle} onChange={(e) => setOrigin(e.target.value)} value={origin}  />
       <TextField id="outlined-basic" label="Year" variant="outlined" className={textStyle} onChange={(e) => setYear(e.target.value)} value={year}  />
        <TextField id="outlined-basic" label="Type" variant="outlined" className={textStyle} onChange={(e) => setType(e.target.value)} value={Type}   />
         <TextField id="outlined-basic" label="Image URL" variant="outlined" className={textStyle} onChange={(e) => setImage(e.target.value)} value={image}  />
        <Button variant="contained" color="secondary" className={button} onClick={handleSubmit}> Add a Car</Button >
    </div>
  )
}

export default CarForm
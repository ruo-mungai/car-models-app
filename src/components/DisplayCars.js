import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    direction:'row',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
 
}));

















function DisplayCars({myCars,classes,setCars,getMake}) {

const classes2 = useStyles();

  function handleDelete(id) {
    fetch(`http://localhost:3000/cars/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const deleteCar = myCars.filter((cars) => cars.id !== id);
        setCars(deleteCar);
      });
  }
    

  const myCar= getMake.map((car)=>(
 
<div className={classes2.root} direction="column">
      <Grid  >
        <Grid item xs={4}  >
         
     
      
      <img src={car.image} alt="car" width="250" height="200"/>
      <h3>Make: {car.Make}</h3>
      <h3>Model: {car.Model}</h3>
      <h3>Year: {car.Year}</h3>
      <h3>Car Info</h3>
      <p>{car.Type}</p>
     <Button variant="contained" color="secondary"  onClick={(e) => (
                 handleDelete(car.id)
               )} >Delete</Button >
   
        </Grid>
        </Grid>
    </div>))
  
  
 
  return (
    <div  > 
     {myCar}
    </div>
  )
}

export default DisplayCars
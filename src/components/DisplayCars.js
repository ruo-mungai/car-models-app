import React from 'react'
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);







const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



function DisplayCars({myCars,classes,setCars,getMake}) {


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

    
    <Table className={classes.table} aria-label="customized table" key={car.id}> 
     <TableHead >
          <TableRow>
            <StyledTableCell>Make</StyledTableCell>
            <StyledTableCell align="right">Model</StyledTableCell>
            <StyledTableCell align="right">Origin</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {car.Make}
              </StyledTableCell>
              <StyledTableCell align="right">{car.Model}</StyledTableCell>
              <StyledTableCell align="right">{car.Origin}</StyledTableCell>
              <StyledTableCell align="right">{car.Year}</StyledTableCell>
              <StyledTableCell align="right"><p>{car.Type}</p></StyledTableCell>
              <StyledTableCell align="right"><img src={car.image} alt="car" width="193" height="130"/></StyledTableCell>
               <StyledTableCell align="right"> <Button variant="contained" color="secondary"  onClick={(e) => (
                 handleDelete(car.id)
               )} >Delete</Button ></StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
  
  ));
  
  return (
    <div  > 
     {myCar}
    </div>
  )
}

export default DisplayCars
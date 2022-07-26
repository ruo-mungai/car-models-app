import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


function DisplayCars({myCars,styles,button,setCars,id}) {

  const classes = useStyles();

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
    function onDelet(){
      handleDelete(id)
    }
    

  const myCar=myCars.map((car)=>(

    
    <Table className={classes.table} aria-label="customized table" key={car.id}> 
        <TableBody >
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {car.Make}
              </StyledTableCell>
              <StyledTableCell align="right">{car.Model}</StyledTableCell>
              <StyledTableCell align="right">{car.Origin}</StyledTableCell>
              <StyledTableCell align="right">{car.Year}</StyledTableCell>
              <StyledTableCell align="right"><p>{car.Info}</p></StyledTableCell>
              <StyledTableCell align="right"><img src={car.image} alt="car image" width="193" height="130"/></StyledTableCell>
               <StyledTableCell align="right"> <Button variant="contained" color="secondary"  onClick={(e) => (
                 handleDelete(car.id)
               )} >Delete</Button ></StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
  
  ));
  
  return (
    <div  >
      <TableHead>
          <TableRow>
            <StyledTableCell>Make/Brand</StyledTableCell>
            <StyledTableCell align="right">Model</StyledTableCell>
            <StyledTableCell align="right">Origin</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
            <StyledTableCell align="right">Horse Power</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
          </TableRow>
        </TableHead>
     {myCar}
    </div>
  )
}

export default DisplayCars
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


function DisplayCars({myCars,styles,button}) {
  const classes = useStyles();

  const myCar=myCars.map((car)=>(

    <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Make/Brand</StyledTableCell>
            <StyledTableCell align="right">Model</StyledTableCell>
            <StyledTableCell align="right">Origin</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
            <StyledTableCell align="right">Car Info</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow key={car.id}>
              <StyledTableCell component="th" scope="row">
                {car.Make}
              </StyledTableCell>
              <StyledTableCell align="right">{car.Model}</StyledTableCell>
              <StyledTableCell align="right">{car.Origin}</StyledTableCell>
              <StyledTableCell align="right">{car.Year}</StyledTableCell>
              <StyledTableCell align="right">{car.Info}</StyledTableCell>
              <StyledTableCell align="right"><img src={car.image} alt="car image" width="193" height="130"/></StyledTableCell>
               <StyledTableCell align="right"> <Button variant="contained" color="secondary" className={button}> Delete</Button ></StyledTableCell>
               <StyledTableCell align="right">{car.Info}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
  
  ));
    {/*<div className={styles}key={car.id}>
      <h3>{car.Make}</h3>
     <h4>{car.Model}
     {car.Origin}
      {car.Year}
      {car.Car_Info}</h4>
  </div>*/}

  return (
    <div >
     {myCar}
    </div>
  )
}

export default DisplayCars
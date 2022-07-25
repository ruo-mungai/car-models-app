import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
function CarForm() {
  return (
    <div>
        <h2>Add Car Form</h2>
        <TextField id="filled-basic" label="Make" variant="filled" />
        <TextField id="filled-basic" label="Model" variant="filled" />
        <TextField id="filled-basic" label="Origin" variant="filled" />
        <TextField id="filled-basic" label="Year" variant="filled" />
        <Button variant="contained" color="secondary"> Add Car</Button>
    </div>
  )
}

export default CarForm
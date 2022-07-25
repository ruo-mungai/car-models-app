import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
function CarForm({classes , textStyle}) {
  return (
    <div >
        <h2>Add Car Form</h2>
        <form  >
       <TextField id="outlined-basic" label="Make" variant="outlined" className={textStyle}  />
       <TextField id="outlined-basic" label="Model" variant="outlined" className={textStyle} />
       <TextField id="outlined-basic" label="Origin" variant="outlined" className={textStyle} />
       <TextField id="outlined-basic" label="Year" variant="outlined" className={textStyle} />
        <Button variant="contained" color="secondary" className={textStyle}style={{
      display:"flex",
      alignItems:"right",
      position:"relative",
      justifyContent:"center",
      flexDirection:"column",
      top:"10px"
    }}> Add a Car</Button >
        </form>
    </div>
  )
}

export default CarForm
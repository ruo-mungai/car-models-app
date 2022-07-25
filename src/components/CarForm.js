import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
function CarForm({classes , textStyle, button}) {
  
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
        <Button variant="contained" color="secondary" className={button}> Add a Car</Button >
        </form>
    </div>
  )
}

export default CarForm
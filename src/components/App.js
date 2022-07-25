import images from '../images.png'
import React from 'react'
import CarForm from './CarForm'
import { makeStyles } from '@material-ui/styles'

function App() {
  const useStyles= makeStyles((theme)=>({
    textField:{
      margin:"10px 0",
       width:"50%",
      height:"30px"
     
    },
    app:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column"
    }
  }))

 const styles=useStyles();

  return (
    <div className={styles.app}>
       <h1>React Car App</h1>
       <img src={images} style={{width:"300px"}} alt="car Pic"/>
       <CarForm classes={styles.app} textStyle={styles.textField}/>
    </div>
  )
}

export default App
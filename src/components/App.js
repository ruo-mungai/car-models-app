import images from '../images.png'
import React from 'react'
import CarForm from './CarForm'
import { makeStyles } from '@material-ui/styles'

function App() {
  const useStyles= makeStyles((theme)=>({
    textField:{
      margin:"20px 0",
       width:"200%",
      height:"30px",
     
    },
      buttonField:{
      margin:"10px 0",
       width:"150%",
      height:"30px",
      top:"10px"

     
    },
    app:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column"
    },
    heading:{
      textShadow:"1px 1px #ff7310"
    }
  }))

 const styles=useStyles();

  return (
    <div className={styles.app}>
       <h1 className={styles.heading}>React Car App</h1>
       <img src={images} style={{width:"300px"}} alt="car Pic"/>
       <CarForm classes={styles.app} textStyle={styles.textField} button={styles.buttonField}/>
    </div>
  )
}

export default App
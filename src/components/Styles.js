import { makeStyles } from '@material-ui/styles'

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

  export default useStyles
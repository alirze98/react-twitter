import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root :{
       
        display:'flex',
        height:'100vh',
        width:'100%',
        overflow:'hidden',
    },
   
   
   
    divider:{
        height:'100%',
        width:1,
        backgroundColor:"#7EBAFF",
        filter:"opacity(0.5)"
    },
    content:{
        flex: 1,
    overflowY:'auto',
    background:'white',
    overflowX:'hidden'
    },
    waitParent:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100vh'
    }
    
});

export default useStyles;
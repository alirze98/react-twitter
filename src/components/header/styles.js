import { makeStyles } from "@material-ui/core";
import theme from "../theme";

const useStyles = makeStyles(Theme=>({
 
  header: {
    padding: 18,
    backgroundColor: "white",
    display: "flex",
  },
  
  headerTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginRight: "0.5rem",
  },
  moreMenu:{
    padding:0,
    marginLeft:'0.5rem'
  },
  moreMenu2:{
    padding:0,
  },
  [theme.breakpoints.down('xs')]:{
  header: {
    display:"flex",
    "justifyContent":"space-between",
  },
  moreMenu:{
    "order":"0"
  },
  moreMenu2:{
    "order":"2"
  },
  headerTitle:{
    display:"none"
  }

  },
  
}));

export default useStyles;

import { makeStyles } from "@material-ui/core";
import theme from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    width: "25%",
    padding: "1.5rem 2rem",
    [theme.breakpoints.down('xs')]:{
      width:'80%'
  },
  },

  profText: {
    marginLeft: "0.5rem",
    width: "max-content",
    direction: "ltr",
  },
  tweeterNameParent:{
    marginRight: "0.5rem !important",
    width: "max-content !important",
    alignItems:"flex-start"
  },
  profName: {
    flex: 1,
  },
  profId: {
    flex: 1,
    color: theme.palette.text.hint,
    fontSize: "0.78rem",
  },
  tweeterRoot: {
    background: "#f5f8fa",
    marginTop: "3rem",
    borderRadius: "2.5rem",
    padding: "11px 24px",
  },
  tweeterTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "11px",
  },
  tweeterParent:{
      padding:'10px 0'
  },
  twitterImg:{
    width:50,
    height:50,
    borderRadius:'50%'
  }
}));

export default useStyles;

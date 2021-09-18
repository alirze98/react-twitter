import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(Theme=>({
  root: {
    background: "#e6e6e6",
    
  },
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
  divider: {
    backgroundColor: "#7EBAFF",
    filter: "opacity(0.18)",
  },
  newTweet: {
    padding: 18,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    flex: 1,
    border: "none",
    marginRight: "1rem",
    "&:focus": {
      outline: "unset",
    },
  },
  newTweetBtn: {
    color: "white !important",
    borderRadius: "1rem !important",
    minHeight: "30px !important",
    height: "30px !important",
    lineHeight: "1rem !important",
    minWidth: "5rem !important",
  },
  newTweetImgBtn: {
    border: "0.5px solid #3339",
    borderRadius: "50%",
    padding: "0.2rem !important",
    marginLeft: "1rem",
  },
  tweetItem:{
    padding: 18,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    marginTop:'0.5rem'

  },
  tweetItemName:{
    fontWeight:600,
   

  },
  tweetItemId:{
    fontSize:'0.9rem',
    marginRight:'0.5rem',
    paddingTop:'0.1rem',
    color:Theme.palette.text.hint
  },
  tweetText:{
    fontSize:'0.9rem',
    marginTop:'0.75rem'
  },
  likeCount:{
    fontSize:'0.8rem',
    color:Theme.palette.text.hint,
    marginLeft:'0.5rem'
  },
  
}));

export default useStyles;

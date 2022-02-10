import React,{useState,useEffect} from "react";
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { getHashTags } from "../../api/api_tweet";
import { setHashTagList, useTweetDispatch, useTweetState } from "../../context/TweetContext";



const RightSidebar = () => {


  
  const {hashTags} = useTweetState();
  const tweetDispatch = useTweetDispatch();
  const [users, setusers] = useState([]);
  useEffect(() => {
    getHashTags((isOk,data)=>{
        if(!isOk)
        return alert("ناموفق بود")
        setHashTagList(tweetDispatch,data);
    })
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={"/"}>
      <Grid container direction={"row"} alignItems={"center"}>
        <Grid item>
          <img src={"/images/logo.png"} />
        </Grid>
        <Grid item>
          <Typography className={classes.logoType}>{"توییتر فارسی"}</Typography>
        </Grid>
      </Grid>
      </Link>
      <Typography className={classes.hashTagTitle}>{"داغ ترین هشتگ ها"}</Typography>
      <Grid container direction={"column"} alignItems={"center"}>
        {hashTags.map((item) => (
          <ButtonBase className={classes.hashTagParent}>
            <Link to={"/hashtags/"+item.text} style={{width:'100%'}}>
            <Grid item container>
              <img src={"/images/hashtag.png"} />
              <Typography className={classes.hashtag}> {item.text}</Typography>
            </Grid>
          </Link>
          </ButtonBase>
        ))}
      </Grid>
    </div>
  );
};

export default RightSidebar;


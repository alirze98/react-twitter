import React,{useState,useEffect} from "react";
import useStyles from "../home/styles";
import Header from "../../components/header/Header";
import { Divider, Typography } from "@material-ui/core";
import NewTweet from "../home/components/NewTweet";
import TweetList from "../home/components/TweetList";
import PersonIcon from '@material-ui/icons/Person';
import axios from "axios";
import {  getTweetsByUserRequest } from "../../api/api_tweet";
import { useLocation } from "react-router";

const TweetsByUser = (props) => {
  const location = useLocation()
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweetsByUserRequest(props.match.params.id,(isOk,data) => {
      if(!isOk)
      return alert(data.message);
      else setTweets(data)
    });
  }, [location]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title={props.match.params.name} icon={<PersonIcon/>}/>
      <Divider className={classes.divider} />
      {tweets.length===0 && 
     
      <Typography >this user has no tweet yet</Typography>
      
      }
      <TweetList data={tweets} />
    </div>
  );
};

export default TweetsByUser;


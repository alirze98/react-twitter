import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import Header from "../../components/header/Header";
import { Divider } from "@material-ui/core";
import NewTweet from "./components/NewTweet";
import TweetList from "./components/TweetList";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import { getAllTweets } from "../../api/api_tweet";
import { useTweetState,setTweetList, useTweetDispatch } from "../../context/TweetContext";


const Home = () => {
  const classes = useStyles();
  

  const tweetDispatch = useTweetDispatch()
  const {tweetList : tweets } = useTweetState();
  
  // const [tweets, setTweets] = useState([]);
  useEffect(() => {
    updateTweets()
  }, []);

  const updateTweets = ()=>{
    getAllTweets((isOk,data)=>{
      if(!isOk)
      return alert("ناموفق بود");
      setTweetList(tweetDispatch,data);
    })

  }

  
  return (
    <div className={classes.root}>
      
      <Header title={"خانه"} icon={<HomeIcon />} />
      <Divider className={classes.divider} />
      <NewTweet updateTweets={updateTweets}></NewTweet>
      <TweetList data={tweets} />
    </div>
  );
};

export default Home;

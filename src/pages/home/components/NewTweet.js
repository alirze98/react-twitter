import { Button, Grid, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../styles";
import classnames from "classnames";
import axios from "axios";
import { newTweetRequest } from "../../../api/api_tweet";
import { toast } from "react-toastify";
import { updateHashTagList, useTweetDispatch, useTweetState } from "../../../context/TweetContext";
import {setTweetText as setTweet} from "../../../context/TweetContext"





const NewTweet = ({updateTweets}) => {
    const inputRef = React.useRef();
    const {tweetText:tweet} = useTweetState();
    const tweetDispatch = useTweetDispatch();
  //  const [tweet,setTweet] = useState();
   const [imageFile,setImageFile] = useState();
   const [imagePath,setImagePath] = useState();
   


    const newTweetClick = ()=>{
      const tweetText = tweet;
      if(!tweetText)
      return;
      const formData = new FormData();
      formData.append("text",tweetText);
      if(imageFile)
      formData.append("image",imageFile);
      newTweetRequest(formData,(isOk,data)=>{
        if (!isOk)
        return toast.error(data)
        toast.success("ارسال شد توییت شما")
        updateTweets();
        setTweet(tweetDispatch,"");
        setImagePath();
        setImageFile();
        if(tweetText.includes("#"))
        updateHashTagList(tweetDispatch)
      })

    };

    const getImage = ()=>{
      
      if(localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
      return localStorage.getItem("image");
      return "/images/person.png"
  
    }
    const selectImg = ()=>{
      inputRef.current.click()

    }
    
    const onchangeImg = (e)=>{
      if(e.target.files && e.target.files.length>0){
        setImageFile(e.target.files[0]);

        const reader = new FileReader();
        reader.onload = (e)=>{
          setImagePath(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0])

      }


    }
  

  const classes = useStyles();
  return (
    <div className={classes.newTweet}>
      <Grid container>
        <img src={getImage} style={{ width: "max-content" }} />
        <input placeholder={"توییت کن ..."} className={classnames(classes.input)} value={tweet} onChange={e=>setTweet(tweetDispatch,e.target.value)} />
        <input type={"file"} style={{display:"none"}} ref={inputRef} onChange={onchangeImg}/>
      </Grid>
      {imagePath &&

      <div>
        <div style={{backgroundImage:`url(${imagePath})`}} className={classes.tweetImg}></div>
        </div>
      }
      <Grid container direction={"row-reverse"} style={{ marginTop: 16 }}>
        <Button
          variant={"contained"}
          color={"primary"}
          className={classes.newTweetBtn}
          onClick={newTweetClick}
        >
          {"توییت"}
        </Button>
        <IconButton className={classes.newTweetImgBtn} onClick={selectImg}>
          <img src={"images/tweetpic.png"} className={classes.newTweetImg} />
        </IconButton>
      </Grid>
    </div>
  );
};

export default NewTweet;


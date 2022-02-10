import React from 'react';
import useStyles from '../styles';
import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { likeTweet, setTweetText, useTweetDispatch } from '../../../context/TweetContext';
import { likeTweetRequest } from '../../../api/api_tweet';
import { toast } from 'react-toastify';

const Tweet = ({data}) => {

    const tweetDispatch = useTweetDispatch()

    const renderTweet = (text)=>{
        return {__html:text.replace(/#\S+/g , "<a href='/tags/$&' style='color:cornflowerblue'>$&</a>" )}
    }


    const getImage = ()=>{
        if(data.user.image)
        return data.user.image;
        else
        return "/images/user.png"
    }

    
    const handleLike = ()=>{
        likeTweetRequest(data._id,(isOk,data)=>{
            if(!isOk)
            return toast.error(data);
            likeTweet(tweetDispatch,data._id);
        });
    }

    const retweetClick= ()=>{
        setTweetText(tweetDispatch,data.text)

    }


    const classes = useStyles()
    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={getImage()} style={{width:50, height:50,borderRadius:"50%",}}/>
                <Grid itme container direction={'column'} style={{flex:1,  marginRight:'1rem'}}>
                <Grid item container>
                <Typography className={classes.tweetItemName}>{data.user.name}</Typography>
                <Typography className={classes.tweetItemId}>{data.user.Id}</Typography>
                </Grid>
                <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText} component={"p"} ></Typography>
                {data.image && 

<div>
  <div style={{backgroundImage:`url(${data.image})`}} className={classes.tweetImg}></div>
  </div>
}

                </Grid>
            </Grid>
            <Grid container direction={'row-reverse'} style={{marginTop:16}} alignItems={'center'}>
                
                <IconButton className={classes.newTweetImgBtn} onClick={retweetClick}>
                <img src={"/images/retweet.png"} className={classes.newTweetImg}/>
                </IconButton>
                <IconButton className={classes.newTweetImgBtn} onClick={handleLike}>
                <FavoriteIcon></FavoriteIcon>
                </IconButton>
                <Typography className={classes.likeCount}>{data.likes}</Typography>

            </Grid>
        </div>
    );
};

export default Tweet;

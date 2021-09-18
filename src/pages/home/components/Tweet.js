import React from 'react';
import useStyles from '../styles';
import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Tweet = ({data}) => {

    const renderTweet = (text)=>{
        return {__html:text.replace(/#\S+/g , "<a href='/tags/$&' style='color:cornflowerblue'>$&</a>" )}
    }


    const classes = useStyles()
    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={data.sender.img} style={{height:'max-content'}}/>
                <Grid itme container direction={'column'} style={{flex:1,  marginRight:'1rem'}}>
                <Grid item container>
                <Typography className={classes.tweetItemName}>{data.sender.name}</Typography>
                <Typography className={classes.tweetItemId}>{data.sender.Id}</Typography>
                </Grid>
                <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText} component={"p"} ></Typography>

                </Grid>
            </Grid>
            <Grid container direction={'row-reverse'} style={{marginTop:16}} alignItems={'center'}>
                
                <IconButton className={classes.newTweetImgBtn}>
                <img src={"/images/retweet.png"} className={classes.newTweetImg}/>
                </IconButton>
                <IconButton className={classes.newTweetImgBtn}>
                <FavoriteIcon></FavoriteIcon>
                </IconButton>
                <Typography className={classes.likeCount}>{data.like}</Typography>

            </Grid>
        </div>
    );
};

export default Tweet;

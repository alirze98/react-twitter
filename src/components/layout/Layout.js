
import Divider from "@material-ui/core/Divider";
import React, { useEffect, useState } from "react";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import RightSidebar from "../rightSidebar/RightSidebar";
import useStyles from "./styles";
import TweetByHashTag from "../../pages/tweetsByHashtag/TweetByHashTag";
import TweetsByUser from "../../pages/tweetsByUser/TweetsByUser";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getProfileRequest } from "../../api/api_auth";
import { toast } from "react-toastify";
import { LocalActivity } from "@material-ui/icons";
import { CircularProgress, Typography } from "@material-ui/core";
import {  useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TwitterDrawer from "../Drawer/TwitterDrawer";
import TwitterDrawer2 from "../Drawer/TwitterDrawer 2";







const Layout = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isTabletSize = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobileSize = useMediaQuery(theme.breakpoints.down('xs'));
  const [wait,setWait]= useState(true);

  useEffect(()=>{
    getProfileRequest((isOk,data)=>{
      if(!isOk){
        toast.error(data);
        localStorage.clear();
        return history.push("/login")
      }
      setWait(false);
      localStorage.setItem("name",data.name);
      localStorage.setItem("image",data.image);
      localStorage.setItem("username",data.username);
      localStorage.setItem("x-auth-token",data["x-auth-token"])
    })
  },[])



  if(wait)
  return <div className={classes.waitParent}>
    <CircularProgress/>
   <Typography>{"please wait"}</Typography>
  </div>;
  else
  return (
    <div className={classes.root}>
      {isTabletSize ? <TwitterDrawer /> :  <RightSidebar></RightSidebar> }
    <Divider orientation={"vertical"} className={classes.divider} />
    <div className={classes.content}>
    {props.children}
    </div>
      <Divider orientation={"vertical"} className={classes.divider} />
      {isMobileSize ? <TwitterDrawer2 /> :  <LeftSidebar></LeftSidebar> }
      
    </div>
  );
};

export default Layout;

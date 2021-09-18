
import Divider from "@material-ui/core/Divider";
import React from "react";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import RightSidebar from "../rightSidebar/RightSidebar";
import useStyles from "./styles";
import TweetByHashTag from "../../pages/tweetsByHashtag/TweetByHashTag";
import TweetsByUser from "../../pages/tweetsByUser/TweetsByUser";





const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <RightSidebar></RightSidebar>
    <Divider orientation={"vertical"} className={classes.divider} />
    <div className={classes.content}>
    {props.children}
    </div>
      <Divider orientation={"vertical"} className={classes.divider} />
      <LeftSidebar></LeftSidebar>
    </div>
  );
};

export default Layout;

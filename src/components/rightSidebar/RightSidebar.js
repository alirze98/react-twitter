import React from "react";
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const hashTag = [
  "سامسونگ",
  "پرچم ــ دار ــ جدید",
  "کرونا",
  "سامر ــ تایم",
  "سامسونگ",
  "پرچم ــ دار ــ جدید",
  "کرونا",
  "سامر ــ تایم",
];

const RightSidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={"/"}>
      <Grid container direction={"row"} alignItems={"center"}>
        <Grid item>
          <img src={"/images/logo.png"} />
        </Grid>
        <Grid item>
          <Typography className={classes.logoType}>توییتر فارسی</Typography>
        </Grid>
      </Grid>
      </Link>
      <Typography className={classes.hashTagTitle}>هشتگ های داغ</Typography>
      <Grid container direction={"column"} alignItems={"center"}>
        {hashTag.map((item) => (
          <ButtonBase className={classes.hashTagParent}>
            <Link to={"/hashtags/"+item} style={{width:'100%'}}>
            <Grid item container>
              <img src={"/images/hashtag.png"} />
              <Typography className={classes.hashtag}> {item}</Typography>
            </Grid>
          </Link>
          </ButtonBase>
        ))}
      </Grid>
    </div>
  );
};

export default RightSidebar;


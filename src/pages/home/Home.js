import React from "react";
import useStyles from "./styles";
import Header from "../../components/header/Header";
import { Divider } from "@material-ui/core";
import NewTweet from "./components/NewTweet";
import TweetList from "./components/TweetList";
import HomeIcon from '@material-ui/icons/Home';

const tweets = [
  {
    sender: {
      name: "samsung",
      Id: "@samsung",
      img: "/images/samsung.png",
    },
    text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود",
    like: 2045,
  },
  {
    sender: {
      name: "سیامک بزرگ",
      Id: "@siamak",
      img: "/images/koooh_user.png",
    },
    text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچن بهبود",
    like: 86,
  },
  {
    sender: {
      name: "محسن زارعی",
      Id: "@mohsen",
      img: "/images/mike.png",
    },
    text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود",
    like: 86,
  },
  {
    sender: {
      name: "samsung",
      Id: "@samsung",
      img: "/images/samsung.png",
    },
    text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود",
    like: 2045,
  },
  {
    sender: {
      name: "سیامک بزرگ",
      Id: "@siamak",
      img: "/images/koooh_user.png",
    },
    text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است وهای متنوع با هدف بهبود",
    like: 86,
  },
  {
    sender: {
      name: "محسن زارعی",
      Id: "@mohsen",
      img: "/images/mike.png",
    },
    text: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم دهای متنوع با هدف بهبود",
    like: 86,
  },
];
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title={"خانه"} icon={<HomeIcon />} />
      <Divider className={classes.divider} />
      <NewTweet></NewTweet>
      <TweetList data={tweets} />
    </div>
  );
};

export default Home;


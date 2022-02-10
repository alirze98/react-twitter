import {
  ButtonBase,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import axios from "axios";
import { getUsers } from "../../api/api_tweet";
import { WarningSharp } from "@material-ui/icons";
import { toast } from "react-toastify";
import {uploadUserPhoto} from "../../api/api_auth"


const Tweeter = ({ img, id, name }) => {
  const classes = useStyles();

  const getImage = ()=>{
    if(img)
    return img;
    return "/images/user.png"

  }

  return (
    <ButtonBase style={{ width: "100%" }}>
      <Grid container direction={"row"} className={classes.tweeterParent}>
        <img src={getImage()} className={classes.twitterImg} />
        <Grid
          item
          container
          direction={"column"}
          className={classes.tweeterNameParent}
          
        >
          <Typography className={classes.profName}>{name}</Typography>
          <Typography className={classes.profId}>{id}</Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );  
};

const LeftSidebar = () => {
 
  const [users, setusers] = useState([]);
  const [imageFile,setImageFile] = useState();
  const [imagePath,setImagePath] = useState();
  const [anchorMenu, setanchorMenu] = useState();
  const inputRef = useRef()



  useEffect(() => {
    getUsers((isOk, data) => {
      if (!isOk) return toast.error("ناموفق در گرفتن  نام کاربران");
      setusers(data);
    });
  }, []);

  const handleToggleMenu = (e) => {
    if (anchorMenu) setanchorMenu(null);
    else 
    setanchorMenu(e.currentTarget);
  };

  const handleAvatarChange = (e)=>{
   
    if(e.target.files && e.target.files.length > 0 ){
      setImageFile(e.target.files[0])

      const reader = new FileReader();
      reader.onload=(e)=>{
        setImagePath(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      const formData = new FormData();
      formData.append("image",e.target.files[0]);
      uploadUserPhoto(formData,(isOk,data)=>{
        if(!isOk)
        return toast.error(data);
        toast.success("عکس شما با موفقیت آپلود شد")
        localStorage.setItem("image",data.imagePath)
       
      })
    }

  }

  const getImage = ()=>{
    if(imagePath)
    return imagePath;
    if(localStorage.getItem("image") && localStorage.getItem("image") !== 'undefined')
    return localStorage.getItem("image")
    return "/images/user-profiles.png"

  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction={"row-reverse"} onClick={handleToggleMenu}>
        <img src={getImage()} style={{ width: 50 , height:50 , borderRadius:"50%" }} />
        <Grid
          item
          container
          direction={"column"}
          style={{ width: "max-content" }}
          className={classes.profText}
        >
          <Typography className={classes.profName}>{localStorage.getItem("name")}</Typography>
          <Typography className={classes.profId}>{localStorage.getItem("username")}</Typography>
        </Grid>
        <input ref={inputRef} type={'File'} style={{display:"none"}} onChange={handleAvatarChange}/>
      </Grid>
      <Grid item container direction={"column"} className={classes.tweeterRoot}>
        <Typography className={classes.tweeterTitle}>
          {"بهترین خبرنگاران"}
        </Typography>
        <Divider style={{ marginLeft: -17, marginRight: -17 }} />
        {users.map((item) => {
          return (
            <>
              <Link to={`/users/${item._id}/${item.name}`}>
                <Tweeter name={item.name} id={item.username} img={item.image} />

                <Divider style={{ marginLeft: -17, marginRight: -17 }} />
              </Link>
            </>
          );
        })}
      </Grid>
      <Menu
        open={Boolean(anchorMenu)}
        onclose={() => setanchorMenu(null)}
        anchorEl={anchorMenu}
      >
        <MenuItem
          onClick={() => {
            inputRef.current.click()
          }}
        >
          {"ویرایش عکس پروفایل"}
        </MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          {"خروچ"}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LeftSidebar;

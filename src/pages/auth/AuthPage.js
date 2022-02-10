import { Paper, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Tab from "@material-ui/core/Tab";
import useStyles from './style';
import { Button,Input } from '@material-ui/core';
import { toast } from 'react-toastify';
import { loginApi, registerApi } from '../../api/api_auth';

const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2

const AuthPage = () => {
    const classes = useStyles()

    const [tab,setTab] = useState(LOGIN_TAB_VALUE);

    // login state 
    const [usernameLogin,setUsernameLogin] = useState();
    const [passwordLogin,setPasswordLogin] = useState();

    // register state
    const [usernameRegister,setusernameRegister] = useState();
    const [passwordRegister,setpasswordRegister] = useState();
    const [confPasswordRegister,setconfPasswordRegister] = useState();
    const [fullNameRegister,setfullNameRegister] = useState();


    const validateRegister = (user)=>{
        if(!user.username)
        return"نام کاربری خود را انتخاب کنید"
        if(!user.password)
        return"رمز عبور خود را انتخاب کنید"
        if(!user.name)
        return"نام کامل خود را وارد کنید"
        if(user.password!==user.confPasswordRegister)
        return"رمز های عبور مطابقت ندارند"
    }

    const handleRegister = ()=>{
        const user = {
            username:usernameRegister,
            password:passwordRegister,
            confPasswordRegister:confPasswordRegister,
            name:fullNameRegister,
        }
        const error = validateRegister(user);
        if(error)
        return toast.warn(error);
        user.confPasswordRegister = undefined;
        registerApi(user,(isOk,data)=>{
            if(!isOk)
            return toast.error(data)
            toast.success("شما با موفقیت ثبت نام کردید")
            localStorage.setItem("name",data.name);
            localStorage.setItem("image",data.image);
            localStorage.setItem("username",data.username);
            localStorage.setItem("x-auth-token",data["x-auth-token"])
            window.location.reload();
        })

    }

  
    const validateLogin = (user)=>{
        if(!user.username)
        return "باید حتما نام کاربری را وارد کنید"
        if(!user.password)
        return "باید حتما رمز عبور را وارد کنید"
    }

    const handleLogin = ()=>{
        const user = {
            username: usernameLogin ,
            password: passwordLogin
        }
        const error = validateLogin(user);
        if(error)
        return toast.warn(error)
        loginApi(user, (isOk,data)=>{
            if(!isOk)
            return toast.error(data);
            toast.success("شما با موفقیت وارد شدید")
            localStorage.setItem("name",data.name);
            localStorage.setItem("image",data.image);
            localStorage.setItem("username",data.username);
            localStorage.setItem("x-auth-token",data["x-auth-token"])
            window.location.reload();
        })
    }

    const handleChangeTab = (e,newValue)=>{
        setTab(newValue);
        console.log(newValue)
    }

    return (
        <div>
            <Paper className={classes.container}>
                <Typography className={classes.headerText}>به توییتر خوش آمدید</Typography>
                <Tabs value={tab}
                 onChange={handleChangeTab}
                 aria-label="disabled tabs example"
                 indicatorcolor="primary"
                 textColor="primary">
      <Tab label="ورود" value={LOGIN_TAB_VALUE} className={classes.tab} />
      <Tab label="ثبت نام" value={REG_TAB_VALUE} className={classes.tab} />
    </Tabs>
    {tab === LOGIN_TAB_VALUE && 
    <div className={classes.containerInput}>
    <Typography>نام کاربری</Typography>
    <Input value={usernameLogin} onChange={e=>setUsernameLogin(e.target.value)} className={"uni_m_b_small"}></Input>
    <Typography>رمز عبور</Typography>
    <Input value={passwordLogin} onChange={e=>setPasswordLogin(e.target.value)} className={"uni_m_b_small"}></Input>
    <Button onClick={handleLogin} variant={"contained"} color="primary">ورود</Button>
    </div>
    }
      {tab === REG_TAB_VALUE && 
    <div className={classes.containerInput}>
    <Typography>نام کامل</Typography>
    <Input value={fullNameRegister} onChange={e=>setfullNameRegister(e.target.value)} className={"uni_m_b_small"}></Input>
    <Typography>نام کاربری</Typography>
    <Input value={usernameRegister} onChange={e=>setusernameRegister(e.target.value)} className={"uni_m_b_small"}></Input>
    <Typography>رمز عبور</Typography>
    <Input value={passwordRegister} onChange={e=>setpasswordRegister(e.target.value)} className={"uni_m_b_small"}></Input>
    <Typography>تکرار رمز عبور</Typography>
    <Input value={confPasswordRegister} onChange={e=>setconfPasswordRegister(e.target.value)} className={"uni_m_b_small"}></Input>
    <Button onClick={handleRegister} variant={"contained"} color="primary">ثبت نام</Button>
    </div>
    }
            </Paper>
        </div>
    );
};

export default AuthPage;
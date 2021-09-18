import { ButtonBase, Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Tweeter = ({img,id,name})=>{
    const classes = useStyles();
    return(
        <ButtonBase style={{width:'100%'}}>
        <Grid container direction={'row'} className={classes.tweeterParent}>
        <img src={img} style={{width:50}}/>
        <Grid item container direction={'column'}  className={classes.tweeterNameParent}>
        
            <Typography className={classes.profName}>{name}</Typography>
            <Typography className={classes.profId}>{id}</Typography>
            

        </Grid>
    </Grid>
    </ButtonBase>
    )
}

const tweeter = [
    {
        name:"بیل گیتس",
        id:"@billGates",
        img:"/images/bil.png"
    },
    {
        name:"samsung",
        id:"@samsung",
        img:"/images/samsung.png"
    },
    {
        name:"xiaomi",
        id:"@xiaomi",
        img:"/images/xiaomi.png"
    },
    {
        name:"شرلی ونگ",
        id:"@shirley _ imc",
        img:"/images/shily.png"
    },
    {
        name:"samsung",
        id:"@samsung",
        img:"/images/samsung.png"
    },
    
]

const LeftSidebar = () => {
    const classes =  useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction={'row-reverse'}>
                <img src={'/images/user img.png'} style={{width:'max-content'}}/>
                <Grid item container direction={'column'} style={{width:'max-content'}} className={classes.profText}>
                    <Typography className={classes.profName}>علی رضایی</Typography>
                    <Typography className={classes.profId}>ali_rezaee</Typography>

                </Grid>
            </Grid>
            <Grid item container direction={'column'} className={classes.tweeterRoot}>
                <Typography className={classes.tweeterTitle}>
                    بهترین خبرنگاران
                </Typography>
                <Divider style={{marginLeft : -17 , marginRight: -17}}/>
                {
                    tweeter.map(item=> {
                        return(<>
                        <Link to={`/users/${item.name}`}>
                    <Tweeter name={item.name} id={item.id} img={item.img}/>
                    <Divider style={{marginLeft : -17 , marginRight: -17}}/>
                    </Link>
                        </>)
                })
                }
            </Grid>
        </div>
    );
};

export default LeftSidebar;
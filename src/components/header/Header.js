import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { IconButton, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import MenueRoundedIcon from '@material-ui/icons/MenuRounded'
import useStyles from './styles';
import { useLayoutDispatch , toggleDrawer, toggleDrawer2 } from '../../context/LayoutContext';

const Header = ({title,icon}) => {
    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down('sm'));
    const isMobileSize = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    const layoutDispatch = useLayoutDispatch()
    return (
        <div className={classes.header}>
            {isTabletSize && (
                <IconButton onClick={()=>toggleDrawer(layoutDispatch)} className={classes.moreMenu}>
                    <MenueRoundedIcon />
                </IconButton>
            )}
            {isMobileSize && (
                 <IconButton onClick={()=>toggleDrawer2(layoutDispatch)} className={classes.moreMenu2}>
                 <MenueRoundedIcon />
             </IconButton>
            )}
            {icon}
            <Typography className={classes.headerTitle}>
            {title}
            </Typography>
        </div>
    );
};

export default Header;
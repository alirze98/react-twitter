import { Drawer } from "@material-ui/core";
import React from "react";
import { drawerOpen2, useLayoutDispatch, useLayoutState,toggleDrawer2 } from "../../context/LayoutContext";
import LeftSidebar from "../leftSidebar/LeftSidebar";
const TwitterDrawer2 = ()=>{
    const {drawerOpen2} = useLayoutState();
    const layoutDispatch = useLayoutDispatch();
   
return(
    <Drawer anchor={'left'} open={drawerOpen2} onClose={()=>{toggleDrawer2(layoutDispatch)}}>
<LeftSidebar />
    </Drawer>
)
}
export default TwitterDrawer2;
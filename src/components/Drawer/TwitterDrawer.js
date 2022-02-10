import { Drawer } from "@material-ui/core";
import React from "react";
import { toggleDrawer, useLayoutDispatch, useLayoutState } from "../../context/LayoutContext";
import RightSidebar from "../rightSidebar/RightSidebar";
const TwitterDrawer = ()=>{
    const {drawerOpen} = useLayoutState();
    const layoutDispatch = useLayoutDispatch()
return(
    <Drawer anchor={'right'} open={drawerOpen} onClose={()=>{toggleDrawer(layoutDispatch)}}>
<RightSidebar />
    </Drawer>
)
}
export default TwitterDrawer;
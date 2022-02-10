import React from "react";


var LayoutStateContext = React.createContext();
var LayoutDispatchContext = React.createContext();

function LayoutReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DRAWER":
      return {...state, drawerOpen: !state.drawerOpen};
      case "TOGGLE_DRAWER2":
      return {...state, drawerOpen2: !state.drawerOpen2};
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({children}) {
  var [state, dispatch] = React.useReducer(LayoutReducer, {
    drawerOpen:false,
    drawerOpen2:false,
  });
  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

function useLayoutState() {
  var context = React.useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useTweetState must be used within a TweetProvider");
  }
  return context;
}

function useLayoutDispatch() {
  var context = React.useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useTweetDispatch must be used within a TweetProvider");
  }
  return context;
}

export {LayoutProvider, useLayoutState, useLayoutDispatch,toggleDrawer,toggleDrawer2 };

// ###########################################################
function toggleDrawer(dispatch) {
  dispatch({
    type: "TOGGLE_DRAWER",
    
  });
};
function toggleDrawer2(dispatch) {
  dispatch({
    type: "TOGGLE_DRAWER2",
    
  });
}





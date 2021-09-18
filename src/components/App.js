import React from "react";
import Layout from "./layout/Layout";
import { BrowserRouter,Route,Switch } from "react-router-dom"; 
import Page404 from "../pages/404/404";
import Home from "../pages/home/Home";
import TweetByHashTag from "../pages/tweetsByHashtag/TweetByHashTag";
import TweetsByUser from "../pages/tweetsByUser/TweetsByUser";



const App = ()=>{
    return ( 
              <BrowserRouter>
              <Route path={"/"} render={()=>{
                return <Layout>
                 <Switch>
                 <Route exact path={"/"} component={Home} />
                 <Route path={"/hashtags/:hashtag"} component={TweetByHashTag} />
                 <Route path={"/users/:user"} component={TweetsByUser} />
                 <Route component={Page404} />
                 
                 </Switch>
                   </Layout>
              }}></Route>
              
              
     
    </BrowserRouter>
    
    );
};

export default App;


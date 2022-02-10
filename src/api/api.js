import axios from "axios";

export const getAxiosInstancejsonServer = () => {
    
   return axios.create({
        baseURL:"http://localhost:3010",
        headers:{
            
                API_KEY:"kjlddfkjskdfjfdsalk"
            
        }
    })
}

export const getAxiosInstanceAuth = () => {
    
    return axios.create({
         baseURL:"https://twitterapi.liara.run/api/",
         headers:{
             
                //  API_KEY:"kjlddfkjskdfjfdsalk"
             
         }
     })
 }

 export const getAxiosInstanceApi = () => {
    
    return axios.create({
         baseURL:"https://twitterapi.liara.run/api/",
         headers:{
             
               'x-auth-token':localStorage.getItem("x-auth-token")
             
         }
     })
 }
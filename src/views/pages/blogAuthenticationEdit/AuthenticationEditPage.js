
import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import routes from ".././../../utils/routes"
import EditFrom from './EditFrom';
const AuthenticationEditPage = () => {
  const location = useLocation();
  const [blogs, setBlog] = useState(null);
  async function getBlogbyId(id) {

    // const ownerId = localStorage.getItem('userId');
  //  console.log("ovner",ownerId)
    try {
      const response = await routes.BLOG_MS.APIS.GET_BLOGS_BY_BLOG_ID(id)
      console.log("response data", response)
      
      setBlog(response)
    } catch (error) {
      console.log("errors", error);
    }
  }
  ;
//  localStorage.setItem("BId",location.state.id);
  useEffect(() => {
    
     let id = location.state.id;

    //let id ="620ceadb78fe0283ee1fed18";
       //let id =location.state==undefined?localStorage.getItem('BId'):location.state.id
       getBlogbyId(id);
    


  }, [location]);
 
  return (

blogs ?<EditFrom preloadedValues={blogs}></EditFrom>: <div>Loading...</div>
  )
}

export default AuthenticationEditPage
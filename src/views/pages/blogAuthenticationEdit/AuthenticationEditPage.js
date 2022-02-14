
import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import routes from ".././../../utils/routes"
const AuthenticationEditPage = () => {
  const location = useLocation();
  const [blogs, setBlog] = useState([]);
  async function getBlogbyId(id) {



    //const ownerId = localStorage.getItem('userId');
   
    try {
      const response = await routes.BLOG_MS.APIS.GET_BLOGS_BY_BLOG_ID(id)
      console.log("response data", response)
      setBlog(response)
    } catch (error) {
      console.log("errors", error);
    }
  }
  ;

  useEffect(() => {
 let id =location.state.id;

 

 console.log(location.state.id);
 getBlogbyId(id);


  }, [location]);
 
  return (
    <div><form>
    <fieldset disabled>
      <legend>Disabled fieldset example</legend>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Disabled input</label>
        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" defaultValue={blogs.title}/>
      </div>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Disabled input</label>
        <input type="text" 
        id="disabledTextInput" 
        class="form-control"
         placeholder="Disabled input"
          // defaultValue={`${blogs.contents[0][2].value.location}`  }
           />
      </div>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Disabled input</label>
        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" defaultValue={blogs.title}/>
      </div>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Disabled input</label>
        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" defaultValue={blogs.title}/>
      </div>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Disabled input</label>
        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" defaultValue={blogs.title}/>
      </div>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Disabled input</label>
        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" defaultValue={blogs.title}/>
      </div>
      <div class="mb-3">
        <label for="disabledTextInput" class="form-label">Disabled input</label>
        <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input" defaultValue={blogs.title}/>
      </div>
      <div class="mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
          <label class="form-check-label" for="disabledFieldsetCheck">
            Can't check this
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
  </form></div>
  )
}

export default AuthenticationEditPage
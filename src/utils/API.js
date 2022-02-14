import routes from "./routes"

export const apiGet = (url,serviceName) => {
  let apiUrl = verifyService(serviceName);
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${url}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => {
        try {
          resolve(response.json());
        } catch (err) {
          console.log("err",err);
          reject(err);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const apiPost = async (url, values,serviceName) => {
  console.log("servername",serviceName)
  
  let apiUrl = verifyService(serviceName);
  //console.log("apiurl",apiUrl)
  //let apiUrl ="http://65.2.88.54:3001/api/v1" ;
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
      
    })
      .then(response => {
        try {
          resolve(response.json());
         
        } catch (err) {
          reject(err);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const apiPut = (url, values ,serviceName) => {
  let apiUrl = verifyService(serviceName);
 // let apiUrl ="api/v1" ;
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${url}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => {
        try {
          resolve(response.json());
        } catch (err) {
          reject(err);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const apiDelete = (url, serviceName) => {
  let apiUrl = verifyService(serviceName);
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${url}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        try {
          resolve(response.json());
        } catch (err) {
          reject(err);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

export const apiPostImage = async (url, values,serviceName) => {
  let apiUrl = verifyService(serviceName);
//let apiUrl ="api/v1" ;
  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}${url}`, {
      method: 'POST',
      body: values,
    })
      .then(response => {
        try {
          resolve(response.json());
        } catch (err) {
          reject(err);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

function verifyService(serviceName) {
  const urls = {
   // BLOG_MS: ()=>{let a=routes.BLOG_MS["BASE_PATH"]; return a;} ,
   BLOG_MS: routes.BLOG_MS.BASE_PATH ,
    USER_MS: routes.USER_MS.USERS_PATH,
    ORGANIZATION_PROFILE: "routes.ORGANIZATION_PROFILE.ORGANIZATION_PATH"
  }
  const retu = urls.BLOG_MS
  console.log("retu",routes.BLOG_MS)
  return retu
 
}
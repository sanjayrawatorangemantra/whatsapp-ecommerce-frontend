
import { API_URL_MAIN} from "../Constant/index";
export const masterService = {
  login,
  logout
};


function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function login(username, role, password){
  const requestOptions={
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8"},
    body: JSON.stringify({"email":username, "role":role, "password":password}
    )
  }
  return fetch(API_URL_MAIN + `user/login`, requestOptions)
    .then(handleLoginResponse)
    .then(user => {
        console.log("mydata",user);
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('userData', JSON.stringify(user));
        return user;
       
    });
}


function handleLoginResponse(response) {
  console.log('response ', response.headers.get("X-AUTH-TOKEN"))
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if(response.headers.get("X-AUTH-TOKEN")!='')
      {
        localStorage.setItem('x-auth-token',response.headers.get("X-AUTH-TOKEN"));
      }
      //localStorage.setItem('X-AUTH-TOKEN',response.headers.get("X-AUTH-TOKEN"));
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}





//import config from 'config';
import { API_URL_MAIN, API_URL_USER } from "../Constant/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";

export const eventService = {

  getDivision,
  deleteDivision,
  uploadHolidayMaster,
  getDealerActivityPoint,
  addDivision,
  soldToManagmentList,
  CustomerUserId,
  addBusinessSegment,
  RetailerUserId,
  SignUpLogin,
  logout,


};



function getDivision(id) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(API_URL_MAIN + `product/get?userid=`+ id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      // if (!result.status) {
      //   const error = (result && result.message) || result.statusText;
      //   return Promise.reject(error);
      // }
      console.log("resultresult", result);
      return result.data;

    });
}


function SignUpLogin(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_MAIN + `user/signup`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      console.log("Signup result",result);
      if (!result.status) {
        const error = (result && result.msg) || result.statusText;
        return Promise.reject(error);
      }
      if (result.status === 400) {
        const error = result.msg;
        return Promise.reject(error);
      }
      return result.data;
    });
}


function deleteDivision(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(API_URL_MAIN + `product/delbyid`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function uploadHolidayMaster(thumbnail, storeno, upload) {

  const formData = new FormData();
  for (let i = 0 ; i < thumbnail.length ; i++) {
    formData.append("menu", thumbnail[i]);
  }
  // formData.append('menu', thumbnail[i]);
  formData.append('storeno', storeno);
  formData.append('file', upload);
  const requestOptions = {
    method: "POST",
    body: formData,
  }

  return fetch(API_URL_MAIN + `store/uploadmenu`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function getDealerActivityPoint(id) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(API_URL_MAIN + `address/storelist?userid=` + id, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      // if (!result.status) {
      //   const error = (result && result.message) || result.statusText;
      //   return Promise.reject(error);
      // }
      return result.data;
    });
}

function addDivision(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_MAIN + `product/storeassign`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function soldToManagmentList(storeNo) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  };

  return fetch(API_URL_MAIN + `product/getStoreProducts?storeno=` + storeNo, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}

function CustomerUserId(userid) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
  };

  return fetch(API_URL_USER + `ums/external-user/getCustomerByContactId/` + userid, requestOptions)
    .then((res) => res.json())
    .then((result) => {

      if (result.status === 401) {
        const error = result.error;

        return Promise.reject(error);
      }
      if (!result.status) {
        const error = (result && result.message) || result.statusText;
        return Promise.reject(error);
      }
      return result.data;
    });
}

function addBusinessSegment(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'X-AUTH-TOKEN': localStorage.getItem('x-auth-token')
    },
    body: JSON.stringify(data),
  };
  console.log(requestOptions, "bodybody");

  return fetch(API_URL_MAIN + `user/storeassign`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}


function RetailerUserId() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  };

  return fetch(API_URL_MAIN + `user/list`, requestOptions)
    .then((res) => res.json())
    .then((result) => {
      return result.data;
    });
}





function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}











import { eventConstants } from '../_constants';
import { eventService } from '../_services';


export const eventActions = {  
  getDivision,
   deleteDivision,
   uploadHolidayMaster,
   getDealerActivityPoint,  
   addClasswithStype,
   soldToManagmentList,
   addDivision,
   CustomerUserId,
   addBusinessSegment,
   RetailerUserId,
   SignUpLogin,
   AssignProduct,
   SoldtoManagmentItemId
};


function SignUpLogin(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.SignUpLogin(data)
      .then(
        signuplogin => dispatch(success(signuplogin)),
         error => dispatch(failure(error.toString()))
      ): dispatch(clearState());
  };
  function request() { return { type: eventConstants.SIGN_UP_LOGIN_REQUEST } }
  function success(signuplogin) { return { type: eventConstants.SIGN_UP_LOGIN_SUCCESS, signuplogin } }
  function failure(error) { return { type: eventConstants.SIGN_UP_LOGIN_FAILURE, error } }
  function clearState() { return { type: eventConstants.SIGN_UP_LOGIN_CLEAR_STATE } }

}



function getDivision(id) {
  return dispatch => {
    dispatch(request());

    eventService.getDivision(id)
      .then(
        getdivision => dispatch(success(getdivision)),
        // error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DIVISION_LIST_REQUEST } }
  function success(getdivision) { return { type: eventConstants.DIVISION_LIST_SUCCESS, getdivision } }
  function failure(error) { return { type: eventConstants.DIVISION_LIST_FAILURE, error } }

}

function deleteDivision(dataList) {
  console.log("Delete Dvision",dataList);
  return dispatch => {
    dispatch(request());

    dataList ? eventService.deleteDivision(dataList)
      .then(
        deletedivision => dispatch(success(deletedivision)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.DELETE_DIVISION_REQUEST } }
  function success(deletedivision) { return { type: eventConstants.DELETE_DIVISION_SUCCESS,deletedivision} }
  function failure(error) { return { type: eventConstants.DELETE_DIVISION_FAILURE, error } }
  function clearState() { return { type: eventConstants.DELETE_DIVISION_CLEAR_STATE } }

}


function uploadHolidayMaster(thumbnail,storeno,upload) {
  return dispatch => {
    dispatch(request());

   !!thumbnail || !!storeno || !!upload ? eventService.uploadHolidayMaster(thumbnail,storeno,upload)
      .then(
        uploadholidaymaster => dispatch(success(uploadholidaymaster)),
        error => dispatch(failure(error.toString()))
      ) : dispatch(clearState());
  };
  function request() { return { type: eventConstants.UPLOAD_HOLIDAY_MASTER_REQUEST } }
  function success(uploadholidaymaster) { return { type: eventConstants.UPLOAD_HOLIDAY_MASTER_SUCCESS, uploadholidaymaster } }
  function failure(error) { return { type: eventConstants.UPLOAD_HOLIDAY_MASTER_FAILURE, error } }
  function clearState() { return { type: eventConstants.UPLOAD_HOLIDAY_MASTER_CLEAR_STATE } }
}



function getDealerActivityPoint(id) {
  return dispatch => {
    dispatch(request());

    eventService.getDealerActivityPoint(id)
      .then(
        dealeractivityPoint => dispatch(success(dealeractivityPoint)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.DEALER_ACTIVITY_POINT_REQUEST } }
  function success(dealeractivityPoint) { return { type: eventConstants.DEALER_ACTIVITY_POINT_SUCCESS, dealeractivityPoint } }
  function failure(error) { return { type: eventConstants.DEALER_ACTIVITY_POINT_FAILURE, error } }
}


function addClasswithStype(styleClass) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(styleClass))
  };

  function request(addclasswithstyle) {
    return { type: eventConstants.ADD_CLASS_WITH_STYLE_REQUEST, addclasswithstyle };
  }
  function success(addclasswithstyle) {
    return { type: eventConstants.ADD_CLASS_WITH_STYLE_SUCCESS, addclasswithstyle };
  }
  function failure(error) {
    return { type: eventConstants.ADD_CLASS_WITH_STYLE_FAILURE, error };

  }
}



function addDivision(data) {
  return dispatch => {
    dispatch(request());

   !! data ? eventService.addDivision(data)
      .then(
        adddivision => dispatch(success(adddivision)),
        error => dispatch(failure(error.toString()))
      ): dispatch(clearState());
  };
  function request() { return { type: eventConstants.ADD_DIVISION_REQUEST } }
  function success(adddivision) { return { type: eventConstants.ADD_DIVISION_SUCCESS, adddivision } }
  function failure(error) { return { type: eventConstants.ADD_DIVISION_FAILURE, error } }
  function clearState() { return { type: eventConstants.ADD_DIVISION_CLEAR_STATE } }

}

function soldToManagmentList(storeno) {
  return dispatch => {
    dispatch(request());

   !!storeno ? eventService.soldToManagmentList(storeno)
      .then(
        soldtomanagment => dispatch(success(soldtomanagment)),
        error => dispatch(failure(error.toString()))
      ): dispatch(ClearState());
  };
  function request() { return { type: eventConstants.SOLD_TO_MANAGMENT_REQUEST } }
  function success(soldtomanagment) { return { type: eventConstants.SOLD_TO_MANAGMENT_SUCCESS, soldtomanagment } }
  function failure(error) { return { type: eventConstants.SOLD_TO_MANAGMENT_FAILURE, error } }
  function ClearState() { return { type: eventConstants.SOLD_TO_MANAGMENT_CLEAR  } }

}


function CustomerUserId(userid) {
  return dispatch => {
    dispatch(request());

    eventService.CustomerUserId(userid)
      .then(
        customeruserid => dispatch(success(customeruserid)),
        error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.CUSTOMER_USERID_REQUEST } }
  function success(customeruserid) { return { type: eventConstants.CUSTOMER_USERID_SUCCESS, customeruserid } }
  function failure(error) { return { type: eventConstants.CUSTOMER_USERID_FAILURE, error } }

}

function addBusinessSegment(data) {
  return dispatch => {
    dispatch(request());

    !!data ? eventService.addBusinessSegment(data)
      .then(
        addbusinesssegment => dispatch(success(addbusinesssegment)),
        error => dispatch(failure(error.toString()))
      ): dispatch(ClearState());
  };
  function request() { return { type: eventConstants.ADD_BUSINESS_SEGMENT_REQUEST } }
  function success(addbusinesssegment) { return { type: eventConstants.ADD_BUSINESS_SEGMENT_SUCCESS, addbusinesssegment } }
  function failure(error) { return { type: eventConstants.ADD_BUSINESS_SEGMENT_FAILURE, error } }
  function ClearState() { return { type: eventConstants.ADD_BUSINESS_SEGMENT_CLEAR_STATE  } }

}

function RetailerUserId() {
  return dispatch => {
    dispatch(request());

    eventService.RetailerUserId()
      .then(
        retaileruserid => dispatch(success(retaileruserid)),
       // error => dispatch(failure(error.toString()))
      );
  };
  function request() { return { type: eventConstants.RETAILER_USERID_REQUEST } }
  function success(retaileruserid) { return { type: eventConstants.RETAILER_USERID_SUCCESS, retaileruserid } }
  function failure(error) { return { type: eventConstants.RETAILER_USERID_FAILURE, error } }

}

function AssignProduct(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(assignproduct) {
    return { type: eventConstants.ASSIGN_PRODUCT_REQUEST, assignproduct };
  }
  function success(assignproduct) {
    return { type: eventConstants.ASSIGN_PRODUCT_SUCCESS, assignproduct };
  }
  function failure(error) {
    return { type: eventConstants.ASSIGN_PRODUCT_FAILURE, error };

  }
}

function SoldtoManagmentItemId(orderID) {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(orderID))
  };

  function request(soldtomanagmentitemid) {
    return { type: eventConstants.SOLD_MANAGEMENT_ITEM_ID_REQUEST, soldtomanagmentitemid };
  }
  function success(soldtomanagmentitemid) {
    return { type: eventConstants.SOLD_MANAGEMENT_ITEM_ID_SUCCESS, soldtomanagmentitemid };
  }
  function failure(error) {
    return { type: eventConstants.SOLD_MANAGEMENT_ITEM_ID_FAILURE, error };

  }
}















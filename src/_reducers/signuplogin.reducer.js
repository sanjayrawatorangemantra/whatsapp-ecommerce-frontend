import { eventConstants } from "../_constants";

export function signuplogin(state = {}, action) {
  switch (action.type) {
    case eventConstants.SIGN_UP_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.SIGN_UP_LOGIN_SUCCESS:
      return {
        loading:false,
        signuplogin: action.signuplogin,
      };
    case eventConstants.SIGN_UP_LOGIN_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.SIGN_UP_LOGIN_CLEAR_STATE:
        return {
            signuplogin : '',
        };

    
    default:
      return state;
  }
}
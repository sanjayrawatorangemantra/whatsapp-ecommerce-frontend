import { eventConstants } from "../_constants";

export function deletedivisionmaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.DELETE_DIVISION_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.DELETE_DIVISION_SUCCESS:
      return {
        loading:false,
        deletedivision: action.deletedivision,
      };
    case eventConstants.DELETE_DIVISION_FAILURE:
      return {
        error: action.error,
      };
      case eventConstants.DELETE_DIVISION_CLEAR_STATE:
        return {
          deletedivision : '',
        };

    
    default:
      return state;
  }
}
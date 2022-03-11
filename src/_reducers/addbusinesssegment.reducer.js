import { eventConstants } from "../_constants";

export function addbusinesssegment(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_BUSINESS_SEGMENT_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_BUSINESS_SEGMENT_SUCCESS:
      return {
        loading:false,
        addbusinesssegment: action.addbusinesssegment,
      };
    case eventConstants.ADD_BUSINESS_SEGMENT_FAILURE:
      return {
        error: action.error,
      };
    case eventConstants.ADD_BUSINESS_SEGMENT_CLEAR_STATE:
        return {
          addbusinesssegment : '',
        };

    
    default:
      return state;
  }
}
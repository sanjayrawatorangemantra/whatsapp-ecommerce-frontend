import { eventConstants } from "../_constants";

export function addAdjustLoyalityAdmin(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_ADJUST_LOYALTY_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.ADD_ADJUST_LOYALTY_SUCCESS:
      return {
        loading:false,
        addAdjustLoyalityAdmin: action.addAdjustLoyalityAdmin,
      };
    case eventConstants.ADD_ADJUST_LOYALTY_FAILURE:
      return {
        error: action.error,
      };
    

    
    default:
      return state;
  }
}
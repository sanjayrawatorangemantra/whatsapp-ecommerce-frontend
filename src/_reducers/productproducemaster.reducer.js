import { eventConstants } from "../_constants";

export function productproducemaster(state = {}, action) {
  switch (action.type) {
    case eventConstants.PRODUCT_PRODUCE_MASTER_LIST_REQUEST:
      return {
        loading: true,
      };
    case eventConstants.PRODUCT_PRODUCE_MASTER_LIST_SUCCESS:
      return {
        getproductproduce: action.getproductproduce,
      };
    case eventConstants.PRODUCT_PRODUCE_MASTER_LIST_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
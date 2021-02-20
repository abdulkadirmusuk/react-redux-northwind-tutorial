import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function savedProductReducer(
  state = initialState.savedProduct,
  action
) {
  switch (action.type) {
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return action.payload; //gelen aksiyonu yani api den gelen payload değeri(kategoriler) return eder.State kategorilerimiz ile doldurulur
    case actionTypes.CREATE_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state; //eğer aksiyon olmaz ise mevcut state döner
  }
}

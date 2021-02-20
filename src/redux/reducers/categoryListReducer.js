import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeCategoryReducer(state=initialState.categories,action){
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload //gelen aksiyonu yani api den gelen payload değeri(kategoriler) return eder.State kategorilerimiz ile doldurulur
        default:
            return state;//eğer aksiyon olmaz ise mevcut state döner
    }
}
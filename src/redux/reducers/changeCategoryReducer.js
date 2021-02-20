import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function changeCategoryReducer(state=initialState.currentCategory,action){
    switch (action.type) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload //gelen aksiyonun payload değerini return eder.Reducer o anki state'i döndürür
        default:
            return state;//eğer aksiyon olmaz ise mevcut state döner
    }
}
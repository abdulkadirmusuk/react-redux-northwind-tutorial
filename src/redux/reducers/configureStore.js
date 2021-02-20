import {createStore, applyMiddleware} from  "redux"
import rootReducer from "./index"
import thunk from "redux-thunk"
//redux-thunk burada bir middleware olarak bağlanır

//Store'u oluşturacak fonksiyon
export default function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunk))
    //applyMiddleWare ile thunk buraya verilir
}
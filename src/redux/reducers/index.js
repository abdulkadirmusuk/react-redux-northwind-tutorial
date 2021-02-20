import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./productListReducer"
import cartReducer from "./cartReducer"
import savedProductReducer from "./savedProductReducer"

//combineReducers bir fonksiyon ve içine reducerlarımız bulunduğu objeyi veriyoruz
const rootReducer = combineReducers({
changeCategoryReducer,//kategori değişimi reducer i eklendi
categoryListReducer, //Kategori Reducer eklendi
productListReducer,//Ürün listesi reducera ekleme
cartReducer,//redux store a bir cardReducer eklendi
savedProductReducer//redux store a eklendi
})

//reducer'ları combine edip birleştireceğiz
export default rootReducer;



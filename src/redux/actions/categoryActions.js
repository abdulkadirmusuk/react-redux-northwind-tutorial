import * as actionTypes from "./actionTypes";

//reducer da seçilen kategori bilgisini tutmak için fonksiyon
//geriye seçilen kategori bilgi objesini döndürür
export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}
//changeCategoryReducer'a action type ve payload verilir.

export function getCategoriesSuccess(categories){
  //Reducer'a success diye bir aksiyon olduğunu ve state'i mevcut kategorilierimizle doldurmasını istiyoruz
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };//yeni state kategoriler olur
}

export function getCategories(){
  //Kategoriler çağrıldığında apiden çek. 
  return function(dispatch){
    let url = "http://localhost:3000/categories";//apiye bağlan
    return fetch(url).then(response=>response.json())//gelen cevabı json a çevir
    .then(result=>dispatch(getCategoriesSuccess(result)))//o sonucu da getCategoriesSuccess a yolla
  }
}


import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  //reducera gidecek değer
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}
export function updateProductSuccess(product) {
  //reducera gidecek değer
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}
export function saveProduct(product) {
  //action'ı devreye alacak yapı
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}
export async function handleResonse(response) {
  if (response.ok) {
    return response.json();
  }
  const error = await response.text();
  throw new Error(error);
}
export function handleError(error){
  console.error("Bir hata oluştu");
  throw error;
}

export function saveProductApi(product) {
  //eğer id gönderilmişse güncelleme, gönderilmemiş ise de ekleme işlemidir. bunun ayrımı ürün kaydetmede böyle yapılsın
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResonse)
    .catch(handleError);
}

//getProducts içine bir categoryId verilerek ilgili kategoriye ait ürünlerin listelenmesi sağlanıyor
export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}

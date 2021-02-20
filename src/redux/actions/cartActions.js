import * as actionTypes from "./actionTypes"

export function addToCart(cartItem){
    //Eğer add to cart aksiyonu çağrılırsa sepete eklenecek eleman yani cartItem payload'a yüklenir
    return {type:actionTypes.ADD_TO_CART,payload:cartItem}
}

export function removeFromCart(product){
    //ilgili product'ın sepetten çıkarılmasını tetikleyen olay
    return {type:actionTypes.REMOVE_FROM_CART,payload:product}
}
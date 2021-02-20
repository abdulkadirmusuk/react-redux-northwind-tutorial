import { act } from "react-dom/test-utils";
import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function cartReducer(state=initialState.cart,action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            //state burada bizim sepetimiz demektir
            //aynı ürünün sepette varlığını kontrol ediyoruz
            var addedItem = state.find(c=>c.product.id===action.payload.product.id);
            if(addedItem) {
                //eğer spette aynı üründen varsa yapılacak işler. Yani sayıyı arttırmak
                var newState=state.map(cartItem=>{
                    if(cartItem.product.id===action.payload.product.id){
                        //Eğer o üründen sebette varsa sayısını arttır
                        return Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                    }
                    return cartItem;
                    //newState burada yeni bir dizidir. Her bir state yani sepetteki elemanlar tek tek gezilir.Eğer sepetteki ürünü tekrar eklemeye çalışıyor isek sadece quantitiy değeri1 arttırılır.
                    //
                })
                return newState;
            }else{
                //state'in kopyasını al ve o kopyaya action ile gelen payload'ı ekle demektir.
                return [...state,{...action.payload}]
            }
        case actionTypes.REMOVE_FROM_CART:
            //id farklı ise onları filtrele ve yeni bir array oluştur. Yani çıkan ürün hariç yeni bir array oluştur o yeni sepet olsun demektir
            const newState2=state.filter(cartItem=>cartItem.product.id!==action.payload.id)
            return newState2;
        default:
            return state;
    }
}


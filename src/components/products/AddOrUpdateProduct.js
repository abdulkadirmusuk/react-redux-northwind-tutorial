import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {getCategories} from "../../redux/actions/categoryActions"
import {saveProduct} from "../../redux/actions/productActions"
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props //mevcut propsları genişletiyoruz demektir 3 nokta
}) {
  const [product, setProduct] = useState({ ...props.product });
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  },[props.product]);
  function handleChange(event){
    const{name,value} = event.target;
    setProduct(previousProduct=>({
        ...previousProduct,
        [name]:name==="categoryId"?parseInt(value,10):value
    }))
  }
  function handleSave(event){
      event.preventDefault();
      saveProduct(product).then(()=>{
          history.pushState("/")
      })
  }

  return (
      <ProductDetail product={product} categories={categories} onChange={handleChange} onSave={handleSave}/>
  )
}
export function getProductById(products,productId){
    //aradığımız ürün state deki id ile eşleşirse o ürünü döndür yoksa null dön
    let product = products.find(product=>product.productId == productId)||null
    return product
}

function mapStateToProps(state,ownProps){
    const productId=ownProps.match.params.productId
    const products= productId&&state.productListReducer.length>0
    ?getProductById(state.productListReducer,productId):{}//Eğer o id ye sahip ürün varsa bilgiler gelir yoksa boş obje oluşur
    return {
        products,
        products:state.productListReducer,
        categories:state.categoryListReducer
    }
}

const mapDispatchToProps={
    getCategories,saveProduct //react hooks redux'a bağlama
}
export default connect(mapStateToProps,mapDispatchToProps)(AddOrUpdateProduct)

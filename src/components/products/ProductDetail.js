import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

//React Hooks ile categories,product,onSave,onChange gibi şeyleri obje olarak metota veririz ve eşleşme hooks ile sağlanmış olur
const ProductDetail = ({categories, product, onSave, onChange}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Güncelle" : "Ekle"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="Hata"
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Seçiniz"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error="Hata"
      />
      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;

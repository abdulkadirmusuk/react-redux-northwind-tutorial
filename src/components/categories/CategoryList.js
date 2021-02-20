import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories(); //uygulama açıldğında kategori sate'i değişmiş oluyor
  }
  selectCategory = (category) => {
    this.props.actions.changeCategories(category);
    this.props.actions.getProducts(category.id);
  };
  render() {
    return (
      <div>
        <h3>
          <Badge color="success">Categories</Badge>
        </h3>
        <ListGroup>
          {/*kategorileri tek tek map halinde gezer ve listitem yapar*/}
          {this.props.categories.map((c) => (
            <ListGroupItem
              active={c.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(c)}
              key={c.id}
            >
              {c.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

//Bu komponentin proplarına bir state'i bağla diyoruz...
function mapStateToProps(state) {
  return {
    //currenctCategory 'yi state den gelen changeCategory'e map et.Bağla diyoruz
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //Kategori aksiyonlarından veriyi propslara bağla
      getCategories: bindActionCreators(
        //Mevcut tüm kategorileri çekmek için
        categoryActions.getCategories,
        dispatch
      ),
      changeCategories: bindActionCreators(
        //KAtegori değişikliği olduğu andaki aksiyonu tekiklemek için
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch), //ilgili kategoriye tıklandığında ürünün gelmesi için tetikleme
    },
  };
}

//connect fonksiyon çalıştıktan sonra geriye categoryList adında fonksiyon döndürür
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

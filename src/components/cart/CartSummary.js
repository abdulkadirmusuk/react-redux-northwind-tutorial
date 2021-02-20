import React, { Component } from "react";
import { connect } from "react-redux";
import {
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavItem,
  NavLink,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
import { Badge } from "reactstrap";

class cartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Cart is Empty</NavLink>
      </NavItem>
    );
  }
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi!");
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge
                color="danger"
                onClick={() => this.removeFromCart(cartItem.product)}
              >
                Sil
              </Badge>{" "}
              {cartItem.product.productName}{" "}
              <Badge color="success"> {cartItem.quantity}</Badge>
            
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to={"/cart"}>Sepete Git</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(cartSummary);

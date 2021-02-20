import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table } from "reactstrap";
import alertify from "alertifyjs"
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

class CartDetail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName+" sepetten silindi!");
  }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>
                    {cartItem.product.productName}
                </td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>

                <td>
                  <Button
                    onClick={() => this.removeFromCart(cartItem.product)}
                    color="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);

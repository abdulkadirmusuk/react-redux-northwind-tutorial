import React, { Component,toggle,isOpen } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

import CartSummary from "../cart/CartSummary"
class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind App</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <CartSummary/>
            </Nav>
            <NavbarText>Shop</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navi;

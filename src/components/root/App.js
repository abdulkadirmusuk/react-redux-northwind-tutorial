import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Route,Switch} from "react-router-dom"
import ProductDetail from "../products/ProductDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import CartDetail from "../cart/CartDetail";


function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/product" exact component={Dashboard}/>
        <Route path="/cart" exact component={CartDetail}/>
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct}/>
      </Switch>
    </Container>
  );
}

export default App;

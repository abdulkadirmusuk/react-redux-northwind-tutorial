import React from "react";
import ReactDOM from "react-dom";
import App from "./components/root/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "alertifyjs/build/css/alertify.min.css";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import { BrowserRouter } from "react-router-dom";

//Uygulamanın react redux olabilmesi için bir provider olması lazım
//Bir store oluşturabilmemiz için configureStore'u burada tanımlamamız gerekmektedir.

const store = configureStore(); //store tanımını değişkene yükledik
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

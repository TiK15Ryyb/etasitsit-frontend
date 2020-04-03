import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import initialState from "./initialState";
ReactDOM.render(
    <Provider store={configureStore(initialState)}>
        <App />
    </Provider>,
    document.getElementById("root")
);
serviceWorker.register();

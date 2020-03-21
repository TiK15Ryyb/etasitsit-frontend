import React from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from "./App";

const Container = () => (
    <Provider store={configureStore()}>
        <App />
    </Provider>
);

export default Container;

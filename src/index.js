import "./styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './registerServiceWorker';

// Routes
import AppRouter from "./routers/AppRouter";

// Redux
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { addTweet } from "./actions/tweets";
const store = configureStore();

store.dispatch(addTweet({handle: "harrisoncramer"}))
setTimeout(() => {
  store.dispatch(addTweet({handle: "timmy"}))
},3000)

// Link Redux + React
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// Render
ReactDOM.render(jsx, document.getElementById("app"));
registerServiceWorker();
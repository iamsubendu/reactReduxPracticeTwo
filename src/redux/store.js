import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
//importing middleware to convert sync operation to async operation as like our api calls are asynchronous
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

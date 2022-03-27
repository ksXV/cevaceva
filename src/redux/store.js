import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./rootreducer";
import createSagaMiddleware from "redux-saga";
import { incrementSaga } from "../App.saga";
const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(incrementSaga);
export default store;

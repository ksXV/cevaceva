import { combineReducers } from "redux";
import numberReducer from "./number/number.reducer";

const rootReducer = combineReducers({
  number: numberReducer,
});

export default rootReducer;

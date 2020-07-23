import {combineReducers} from "redux";
import {categoryReducer, dataBase} from "./reducers";

export const rootReducer = combineReducers({
  categories: categoryReducer,
  dataBase: dataBase,
});
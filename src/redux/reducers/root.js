import { combineReducers } from "redux";
import JobReducer from "./jobReducer";
//Reducers

const rootReducer = combineReducers({
  jobs: JobReducer,
});

export default rootReducer;

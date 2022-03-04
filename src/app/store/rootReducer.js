import { combineReducers } from "redux";
import eventReducer from "./reducers/events/eventReducer";

const rootReducer = combineReducers({
  event: eventReducer,
});

export default rootReducer;

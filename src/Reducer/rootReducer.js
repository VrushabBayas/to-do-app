import { combineReducers } from "redux";
import todoReducer from "../Components/ToDos/Reducer/todoReducer";

export default combineReducers({
  todos: todoReducer,
});

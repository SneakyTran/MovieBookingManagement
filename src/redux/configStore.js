import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { BannerReducer } from "./reducer/BannerReducer";
import { ModalFilmReducer } from "./reducer/ModalFilmReducer";
const rootReducer = combineReducers({
  ModalFilmReducer,
  BannerReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

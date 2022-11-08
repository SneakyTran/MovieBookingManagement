import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { BannerReducer } from "./reducer/BannerReducer";
import { CinemaReducer } from "./reducer/CinemaReducer";
import { ModalFilmReducer } from "./reducer/ModalFilmReducer";

const rootReducer = combineReducers({
    ModalFilmReducer,
    BannerReducer,
    CinemaReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

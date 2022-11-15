import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { MovieManagerReducer } from "./reducer/MovieManagerReducer";
import { BannerReducer } from "./reducer/BannerReducer";
import { CinemaReducer } from "./reducer/CinemaReducer";
import { ModalFilmReducer } from "./reducer/ModalFilmReducer";
import { FormReducer } from "./reducer/FormReducer";
import { UserManagerReducer } from "./reducer/UserManagerReducer";
import { TicketBookingReducer } from "./reducer/TicketBookingReducer";

const rootReducer = combineReducers({
    ModalFilmReducer,
    BannerReducer,
    CinemaReducer,
    MovieManagerReducer,
    FormReducer,
    UserManagerReducer,
    TicketBookingReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

import { Redirect, useHistory } from "react-router-dom";
import { bothServiceToken } from "../../Service/BothTokenService";
import { BOOK_TICKET, SEAT_BOOKING } from "../../utils/setting";
import { GET_SEAT } from "../types/CinemaType";
import { HIDE_PRELOADING } from "../types/PreloadingTypes";
import { CLEAR_SEAT } from "../types/TIcketBookingTypes";

export const getSeatBookingAction = (showTimeId) => {
    return (middleWareDispatch) => {
        bothServiceToken
            .get(SEAT_BOOKING + showTimeId)
            .then((res) => {
                middleWareDispatch({
                    type: GET_SEAT,
                    arrSeat: res.data.content,
                });
                middleWareDispatch({
                    type: HIDE_PRELOADING,
                });
            })
            .catch((err) => {
                console.log([err]);
            });
    };
};

export const bookTicketAction = (seatBookingModel) => {
    return (middleWareDispatch) => {
        bothServiceToken
            .post(BOOK_TICKET, seatBookingModel)
            .then((res) => {
                middleWareDispatch({
                    type: CLEAR_SEAT,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

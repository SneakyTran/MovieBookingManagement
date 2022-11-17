import { bothServiceToken } from "../../Service/BothTokenService";
import { BOOK_TICKET, SEAT_BOOKING } from "../../utils/setting";
import { GET_SEAT } from "../types/CinemaType";
import { HIDE_PRELOADING } from "../types/PreloadingTypes";

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
    return (middleWaredispatch) => {
        bothServiceToken
            .post(BOOK_TICKET, seatBookingModel)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

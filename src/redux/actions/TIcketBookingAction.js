import { bothServiceToken } from "../../Service/BothTokenService";
import { BOOK_TICKET, SEAT_BOOKING } from "../../utils/setting";
import { GET_SEAT } from "../types/CinemaType";

export const getSeatBookingAction = (showTimeId) => {
    return (middleWareDispatch) => {
        bothServiceToken
            .get(SEAT_BOOKING + showTimeId)
            .then((res) => {
                middleWareDispatch({
                    type: GET_SEAT,
                    arrSeat: res.data.content,
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

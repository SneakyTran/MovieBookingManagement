import { SELECT_TICKET } from "../type/TIcketBookingTypes";

const initialState = {
    arrSelectedSeat: [],
};

export const TicketBookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TICKET:
            let indexFound = state.arrSelectedSeat.findIndex(
                (seat) => seat.maGhe === action.selectedSeat.maGhe
            );
            //remove selected seat if is existed
            if (indexFound !== -1) {
                state.arrSelectedSeat.splice(indexFound, 1);
            } else {
                state.arrSelectedSeat = [
                    ...state.arrSelectedSeat,
                    action.selectedSeat,
                ];
            }
            return { ...state };

        default:
            return state;
    }
};

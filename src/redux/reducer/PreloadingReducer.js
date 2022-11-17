import { DISPLAY_PRELOADING, HIDE_PRELOADING } from "../types/PreloadingTypes";

const initialState = {
    isLoading: false,
};

export const PreloadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_PRELOADING:
            state.isLoading = true;
            return { ...state };

        case HIDE_PRELOADING:
            state.isLoading = false;
            return { ...state };

        default:
            return state;
    }
};

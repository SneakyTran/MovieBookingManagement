import { PLAY_TRAILER } from "../type/BannerType";
import { CLOSE_MODAL, OPEN_MODAL } from "../type/ModalType";

const initialState = {
    show: false,
    ComponentContentModal: <p>dfadfasdfasdf</p>,
};

export const ModalFilmReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      state.show = true;
      return { ...state };
    case CLOSE_MODAL:
      state.show = false;
      return { ...state };
    case PLAY_TRAILER:
      state.ComponentContentModal = action.payload;
      state.show = true;

      return { ...state };

    default:
      return state;
  }
};

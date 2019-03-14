import {
  SHOW_POST_MODAL, HIDE_POST_MODAL, MAKE_POST_MODAL_EDITABLE, MAKE_POST_MODAL_UNEDITABLE,
  UPDATE_POST_SUCCESS, DELETE_POST_SUCCESS,
} from '../actions';

const initialState = { id: false, isEditable: false };

const shownPostModal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POST_MODAL:
      return { ...state, id: action.payload.id, isEditable: false };
    case HIDE_POST_MODAL:
      return { ...state, id: false, isEditable: false };
    case MAKE_POST_MODAL_EDITABLE:
      return { ...state, isEditable: true };
    case MAKE_POST_MODAL_UNEDITABLE:
      return { ...state, isEditable: false };
    case UPDATE_POST_SUCCESS:
      return { ...state, isEditable: false };
    case DELETE_POST_SUCCESS:
      return { ...state, isEditable: false, id: false };
    default:
      return state;
  }
};

export default shownPostModal;

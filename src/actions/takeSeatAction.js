import {TAKE_SEAT_ACTION} from '../constants/actions'
export const takeSeatAction = (id = "") => dispatch => {
  dispatch({
    type: TAKE_SEAT_ACTION,
    payload: id || "No seat id"
  });
};

export const takeSeatAction = (id = "") => dispatch => {
  dispatch({
    type: "TAKE_SEAT_ACTION",
    payload: id || "No seat id"
  });
};

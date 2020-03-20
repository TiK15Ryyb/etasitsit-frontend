export default (state, action) => {
    switch (action.type) {
    case "TAKE_SEAT_ACTION":
        return {
            ...state,
            seat: action.payload,
        };
    default:
        return state;
    }
};

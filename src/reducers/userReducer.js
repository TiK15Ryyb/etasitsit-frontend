import {
    TAKE_SEAT_ACTION,
    UPDATE_USER_INFO_FORM_ACTION,
    SUBMIT_USER_INFO_FORM_ACTION,
} from "../constants/actions";
export default (state = {}, action) => {
    switch (action.type) {
        case TAKE_SEAT_ACTION:
            return {
                ...state,
                seat: action.payload,
            };
        case UPDATE_USER_INFO_FORM_ACTION:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.payload,
                },
            };
        case SUBMIT_USER_INFO_FORM_ACTION:
            return {
                ...state,
                info: {
                    ...state.info,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};

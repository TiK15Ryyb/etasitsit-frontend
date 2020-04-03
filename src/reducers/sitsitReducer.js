import {
    UPDATE_SITSIT_INFO_FORM_ACTION,
    SUBMIT_SITSIT_INFO_FORM_ACTION,
} from "../constants/actions";
export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_SITSIT_INFO_FORM_ACTION:
            return {
                ...state,
                sitsitForm: {
                    ...state.sitsitForm,
                    ...action.payload,
                },
            };
        case SUBMIT_SITSIT_INFO_FORM_ACTION:
            return {
                ...state,
                sitsit: {
                    ...state.info,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};

import {
    UPDATE_SITSIT_FORM_ACTION,
    SUBMIT_SITSIT_FORM_ACTION,
} from "../constants/actions";
export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_SITSIT_FORM_ACTION:
            return {
                ...state,
                sitsitForm: {
                    ...state.sitsitForm,
                    ...action.payload,
                },
            };
        case SUBMIT_SITSIT_FORM_ACTION: {
            var numberOfTables = parseInt(action.payload.numberOfTables);
            if (isNaN(numberOfTables)) {
                numberOfTables = state.sitsit.numberOfTables;
            }
            return {
                ...state,
                sitsit: {
                    ...state.sitsit,
                    ...action.payload,
                    numberOfTables: numberOfTables,
                },
            };
        }
        default:
            return state;
    }
};

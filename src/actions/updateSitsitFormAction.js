import { UPDATE_SITSIT_FORM_ACTION } from "../constants/actions";
export const updateSitsitFormAction = (sitsitObject = {}) => dispatch => {
    dispatch({
        type: UPDATE_SITSIT_FORM_ACTION,
        payload: sitsitObject,
    });
};

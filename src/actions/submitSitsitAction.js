import { SUBMIT_SITSIT_FORM_ACTION } from "../constants/actions";
export const submitSitsitAction = (sitsitObject = {}) => dispatch => {
    dispatch({
        type: SUBMIT_SITSIT_FORM_ACTION,
        payload: sitsitObject,
    });
};

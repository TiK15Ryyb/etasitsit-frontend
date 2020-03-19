export const submitUserInfoAction = (infoObject = {}) => dispatch => {
  dispatch({
    type: "SUBMIT_USER_INFO_FORM_ACTION",
    payload: infoObject
  });
};

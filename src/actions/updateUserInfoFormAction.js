export const updateUserInfoFormAction = (infoObject = {}) => dispatch => {
  dispatch({
    type: "UPDATE_USER_INFO_FORM_ACTION",
    payload: infoObject
  });
};

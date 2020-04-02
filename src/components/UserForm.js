import React from "react";
import { func } from "prop-types";

import { userInfo, userFormInfo } from "../propTypes";
import "../App.css";

const propTypes = {
    info: userInfo,
    form: userFormInfo,
    submitUserInfoAction: func,
    updateUserInfoFormAction: func,
};

const UserForm = props => {
    const submitUserInfo = event => {
        props.submitUserInfoAction(props.form);
        event.preventDefault();
    };

    const updateUserInfoForm = field => {
        switch (field) {
            case "name":
                return event => {
                    props.updateUserInfoFormAction({
                        name: event.target.value,
                    });
                };
            default:
                return () => {};
        }
    };

    return (
        <form onSubmit={submitUserInfo}>
            Name:
            <input
                className="inputUserFormName"
                type="text"
                value={props.form.name}
                onChange={updateUserInfoForm("name")}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

UserForm.propTypes = propTypes;
export { UserForm };
export default UserForm;

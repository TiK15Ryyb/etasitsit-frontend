import React from "react";
import "../App.css";
import { userInfo, userFormInfo } from "../propTypes";
import { func } from "prop-types";

const propTypes = {
    info: userInfo,
    form: userFormInfo,
    submitUserInfoAction: func,
    updateUserInfoFormAction: func,
};

const UserForm = (props) => {

    const submitUserInfo = event => {
        props.submitUserInfoAction(props.form);
        event.preventDefault();
    };

    const updateUserInfoForm = field => {
        switch (field) {
        case "name": return event => {
            props.updateUserInfoFormAction({ name: event.target.value });
        };
        default: return () => { };
        }
    };

    return (
        <form onSubmit={submitUserInfo}>
      Name:
            <input
                type="text"
                value={props.info.name}
                onChange={updateUserInfoForm("name")}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

UserForm.propTypes = propTypes;

export default UserForm;

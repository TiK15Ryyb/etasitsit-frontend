import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { submitUserInfoAction } from "../actions/submitUserInfoAction";
import { updateUserInfoFormAction } from "../actions/updateUserInfoFormAction";
import { userInfo, userFormInfo } from "../propTypes";
import { func } from "prop-types";

const mapStateToProps = state => ({
    info: state.userReducer.info || {},
    form: state.userReducer.form || {},
});

const mapDispatchToProps = dispatch => ({
    submitUserInfoAction: info => dispatch(submitUserInfoAction(info)),
    updateUserInfoFormAction: info => dispatch(updateUserInfoFormAction(info)),
});

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
                type="text"
                value={props.form.name}
                onChange={updateUserInfoForm("name")}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

UserForm.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

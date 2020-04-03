import React from "react";
import { func } from "prop-types";

import { sitsit, sitsitForm } from "../propTypes";
import "../App.css";

const propTypes = {
    sitsit: sitsit,
    sitsitForm: sitsitForm,
    submitSitsitAction: func,
    updateSitsitFormAction: func,
};

const SitsitForm = props => {
    const submitSitsit = event => {
        props.submitSitsitAction(props.sitsitForm);
        event.preventDefault();
    };

    const updateSitsitForm = field => {
        switch (field) {
            case "name":
                return event => {
                    props.updateSitsitFormAction({
                        name: event.target.value,
                    });
                };
            default:
                return () => { };
        }
    };

    return (
        <form onSubmit={submitSitsit}>
            Name:
            <input
                className="inputSitsitFormName"
                type="text"
                value={props.sitsitForm.name}
                onChange={updateSitsitForm("name")}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

SitsitForm.propTypes = propTypes;
export { SitsitForm };
export default SitsitForm;

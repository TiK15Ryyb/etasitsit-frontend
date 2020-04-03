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
        event.preventDefault();
        props.submitSitsitAction(props.sitsitForm);
    };

    const updateSitsitForm = field => {
        switch (field) {
            case "name":
                return event => {
                    props.updateSitsitFormAction({
                        name: event.target.value,
                    });
                };
            case "numberOfTables":
                return event => {
                    props.updateSitsitFormAction({
                        numberOfTables: event.target.value,
                    });
                };
            default:
                return event => {
                    props.updateSitsitFormAction({
                        [field]: event.target.value,
                    });
                };
        }
    };

    return (
        <form onSubmit={submitSitsit}>
            Name:
            <input
                type="text"
                value={props.sitsitForm.name}
                onChange={updateSitsitForm("name")}
            />
            <br></br>
            Number of Tables:
            <input
                type="text"
                value={props.sitsitForm.numberOfTables}
                onChange={updateSitsitForm("numberOfTables")}
            />
            <br></br>
            Seats per Table:
            <input
                type="text"
                value={props.sitsitForm.seatsPerTable}
                onChange={updateSitsitForm("seatsPerTable")}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

SitsitForm.propTypes = propTypes;
export { SitsitForm };
export default SitsitForm;

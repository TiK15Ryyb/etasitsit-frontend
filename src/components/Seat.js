import React from "react";
import "../App.css";
import { func, string } from "prop-types";

const propTypes = {
    takeSeatAction: func.isRequired,
    seatLocation: string.isRequired,
};

const Seat = props => {
    const seatLocation = props.seatLocation;

    const takeSeat = event => { // eslint-disable-line
        // eslint-disable-line
        props.takeSeatAction(seatLocation);
    };

    return <button onClick={takeSeat}>{seatLocation}</button>;
};

Seat.propTypes = propTypes;

export default Seat;

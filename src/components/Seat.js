import React from "react";
import "../App.css";
import { func, string } from "prop-types";

const propTypes = {
    takeSeatAction: func.isRequired,
    seatLocation: string.isRequired,
    taken: string.isRequired,
};

const Seat = props => {
    const seatLocation = props.seatLocation;
    const takeSeat = () => {
        props.takeSeatAction(seatLocation);
    };
    //TODO larger font
    return (
        <button onClick={takeSeat}>
            {" "}
            {props.taken === seatLocation ? "👨‍🎓" : "🪑"}
        </button>
    );
};

Seat.propTypes = propTypes;

export default Seat;

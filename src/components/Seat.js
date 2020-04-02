import React from "react";
import { func, string } from "prop-types";

import "../App.css";

const propTypes = {
    takeSeatAction: func.isRequired,
    seatLocation: string.isRequired,
    taken: string.isRequired,
};

const Seat = props => {
    const seatLocation = props.seatLocation;
    const icon =
        (Number(seatLocation.slice(-1)) +
            (seatLocation[seatLocation.length - 2] === "A" ? 0 : 1)) %
            2 ===
        0
            ? "👩‍🎓"
            : "👨‍🎓";
    const takeSeat = () => {
        props.takeSeatAction(seatLocation);
    };
    //TODO larger font
    return (
        <button onClick={takeSeat}>
            <h1>{props.taken === seatLocation ? icon : "🪑"}</h1>
        </button>
    );
};

Seat.propTypes = propTypes;
export default Seat;

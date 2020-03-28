import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { takeSeatAction } from "../actions/takeSeatAction";
import { func, string } from "prop-types";

const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = dispatch => ({
    takeSeatAction: id => dispatch(takeSeatAction(id)),
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Seat);

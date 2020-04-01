import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { array, number, bool } from "prop-types";

import Seat from "./Seat";

import { DEFAULT_NUMBER_OF_SEATS } from "../constants/components";

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const propTypes = {
    seatLocations: array.isRequired,
    numberOfSeats: number.isRequired,
    tableEndSeatAllowed: bool.isRequired,
    tableId: number.isRequired,
};

function createSeatLocations(numberOfSeats, tableEndSeatAllowed = false) {
    const columns = ["A", "B"];
    const rows = [...Array(Math.ceil(numberOfSeats / 2)).keys()];
    const reduceLocations = (rows, seat) => {
        return [
            [...rows[0], columns[0] + seat],
            [...rows[1], columns[1] + seat],
        ];
    };
    const seatLocations = rows.reduce(reduceLocations, [[], []]);
    if (tableEndSeatAllowed) {
        //TODO Add end seats
    }
    return seatLocations;
}

const Table = props => {
    const numberOfSeats =
        (props.seatLocations && props.seatLocations.length) ||
        props.numberOfSeats ||
        DEFAULT_NUMBER_OF_SEATS;
    const seatLocations =
        props.seatLocations ||
        createSeatLocations(numberOfSeats, props.tableEndSeatAllowed);
    const seats = seatLocations.map((x, xi) => [
        x.map(y => (
            <Seat
                key={`${props.tableId}:${y}`}
                seatLocation={props.tableId + y}
            ></Seat>
        )),
        xi === 0 ? <br /> : "",
    ]);
    return <pre>{seats}</pre>;
};

Table.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Table);

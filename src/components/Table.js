import React from "react";
import "../App.css";
import { array, number, bool } from "prop-types";

import Seat from "../containers/Seat";
import { DEFAULT_NUMBER_OF_SEATS } from "../constants/defaults";

const propTypes = {
    seatLocations: array.isRequired,
    numberOfSeats: number.isRequired,
    tableEndSeatAllowed: bool.isRequired,
    tableId: Int16Array.isRequired,
};

function createSeatLocations(numberOfSeats, tableEndSeatAllowed = false) {
    const columns = ["A", "B"];
    const rows = [...Array(Math.ceil(numberOfSeats / 2)).keys()];
    const seatLocations = rows
        .reduce(
            (prev, curr /*, i*/) => [...prev, ...columns.map(x => x + curr)],
            []
        )
        .reduce(
            (prev, curr, i) => [
                [...prev[0], ...(i % 2 === 0 ? [curr] : [])],
                [...prev[1], ...(i % 2 !== 0 ? [curr] : [])],
            ],
            [[], []]
        );
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

export default Table;

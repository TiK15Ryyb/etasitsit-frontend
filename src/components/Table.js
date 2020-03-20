import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../App.css";

import Seat from "./Seat";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

const propTypes = {
  seatLocations: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  numberOfSeats: PropTypes.number
}

const DEFAULT_NUMBER_OF_SEATS = 10;

function createSeatLocations(numberOfSeats, tableEndSeatAllowed = false) {
  const columns = ["A", "B"];
  const rows = [...Array(Math.ceil(numberOfSeats / 2)).keys()];
  const seatLocations = rows
    .reduce((prev, curr, i) => [...prev, ...columns.map(x => x + curr)], [])
    .reduce(
      (prev, curr, i) => [
        [...prev[0], ...(i % 2 === 0 ? [curr] : [])],
        [...prev[1], ...(i % 2 !== 0 ? [curr] : [])]
      ],
      [[], []]
    );

  return seatLocations;
}

const Table = (props) => {
  const numberOfSeats =
    (props.seatLocations && props.seatLocations.length) ||
    props.numberOfSeats ||
    DEFAULT_NUMBER_OF_SEATS;
  const seatLocations =
    props.seatLocations ||
    createSeatLocations(numberOfSeats, props.tableEndSeatAllowed);
  const seats = seatLocations.map((x, xi) => [
    x.map(y => <Seat seatLocation={y}></Seat>),
    xi === 0 ? <br /> : ""
  ]);

  return <pre>{seats}</pre>;

}

Table.propTypes = propTypes

export default connect(mapStateToProps, mapDispatchToProps)(Table);

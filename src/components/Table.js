import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

import Seat from './Seat'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
})

const DEFAULT_NUMBER_OF_SEATS = 10

function createSeatLocations(numberOfSeats, tableEndSeatAllowed = false) {
  const columns = ['A', 'B']
  const rows = [...Array(Math.ceil(numberOfSeats / 2)).keys()]
  const seatLocations = rows.reduce(
    (prev, curr, i) => [...prev, ...(columns.map(x => x + curr))], []
  ).reduce(
    (prev, curr, i) => [
      [...prev[0], ...(i % 2 === 0 ? [curr] : [])], [...prev[1], ...(i % 2 !== 0 ? [curr] : [])],
    ], [[], []])

  return seatLocations
}

class Table extends Component {
  numberOfSeats = this.props.seatLocations && this.props.seatLocations.length
    || this.props.numberOfSeats || DEFAULT_NUMBER_OF_SEATS
  seatLocations = this.props.seatLocations || createSeatLocations(this.numberOfSeats, this.props.tableEndSeatAllowed);
  seats = this.seatLocations.map((x, xi) => [x.map(y => <Seat seatLocation={y}></Seat>), xi == 0 ? <br /> : ''])
  render() {
    return (
      <pre>{this.seats}</pre>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);
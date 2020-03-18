import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';

import Seat from './Seat'

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
})


class App extends Component {

  defaultNumberOfSeats = 10
  defaultColumns = ['A', 'B']
  defaultRows = [...Array(this.defaultNumberOfSeats / 2).keys()]
  defaultSeatLocations = this.defaultRows.reduce(
    (prev, curr, i) => [...prev, ...(this.defaultColumns.map(x => x + curr))], []
  )

  seatLocations = this.props.seatLocations || this.defaultSeatLocations;
  seats = this.seatLocations.map(x => <Seat seatLocation={x}></Seat>)

  render() {
    return (
      <pre>{this.seats}</pre>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
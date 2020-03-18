import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { takeSeatAction } from "../actions/takeSeatAction";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  takeSeatAction: id => dispatch(takeSeatAction(id))
});

class Seat extends Component {
  seatLocation = this.props.seatLocation;

  takeSeatAction = event => {
    this.props.takeSeatAction(this.seatLocation);
  };

  render() {
    return <button onClick={this.takeSeatAction}>{this.seatLocation}</button>;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seat);

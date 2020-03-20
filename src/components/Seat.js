import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../App.css";
import { takeSeatAction } from "../actions/takeSeatAction";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  takeSeatAction: id => dispatch(takeSeatAction(id))
});

const propTypes = {
  seatLocation: PropTypes.string,
  takeSeatAction: PropTypes.func
}


const Seat = (props) => {
  const seatLocation = props.seatLocation;

  const takeSeatAction = event => {
    props.takeSeatAction(seatLocation);
  };

  return <button onClick={takeSeatAction}>{seatLocation}</button>;

}

Seat.propTypes = propTypes

export default connect(mapStateToProps, mapDispatchToProps)(Seat);

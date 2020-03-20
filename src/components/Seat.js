import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { takeSeatAction } from "../actions/takeSeatAction";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  takeSeatAction: id => dispatch(takeSeatAction(id))
});

const Seat = (props) => {
  const seatLocation = props.seatLocation;

  const takeSeatAction = event => {
    props.takeSeatAction(seatLocation);
  };

  return <button onClick={takeSeatAction}>{seatLocation}</button>;

}
export default connect(mapStateToProps, mapDispatchToProps)(Seat);

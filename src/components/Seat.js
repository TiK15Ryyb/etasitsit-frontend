import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { takeSeatAction } from "../actions/takeSeatAction";
import { fn } from 'prop-types';

const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = dispatch => ({
    takeSeatAction: id => dispatch(takeSeatAction(id)),
});

class Seat extends Component {
    static propTypes = {
        takeSeatAction: fn.isRequired(),
        seatLocation: fn.isRequired(),
    };

    seatLocation = this.props.seatLocation;

    takeSeatAction = () => {
        this.props.takeSeatAction(this.seatLocation);
    };

    render() {
        return <button onClick={this.takeSeatAction}>{this.seatLocation}</button>;
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Seat);

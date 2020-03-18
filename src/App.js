import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import Table from "./components/Table";

const mapStateToProps = state => ({
  seat: state.userReducer.seat || ""
});

const mapDispatchToProps = dispatch => ({});

class App extends Component {
  render() {
    const seatSituation = this.props.seat ? (
      <h1>Your seat is {this.props.seat}</h1>
    ) : (
      <h1> Take a seat!</h1>
    );

    return (
      <div className="App">
        <header className="App-header">
          {seatSituation}
          <pre>
            {" "}
            state:
            {JSON.stringify(this.props)}
          </pre>
          <Table></Table>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

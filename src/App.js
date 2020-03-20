import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { string } from 'prop-types';

import Table from "./components/Table";

const mapStateToProps = state => ({
    seat: state.userReducer.seat || "",
});

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

const App = (props) => {
  const seatSituation = props.seat ? (
    <h1>Your seat is {props.seat}</h1>
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
            {JSON.stringify(props)}
        </pre>
        <Table></Table>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload
        </p>
    </div>
  );
}

App.propTypes = {
  seat: string.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

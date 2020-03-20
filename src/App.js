import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { string, shape } from "prop-types";

import Table from "./components/Table";
import UserForm from "./components/UserForm";

const mapStateToProps = state => ({
  seat: state.userReducer.seat || "",
  info: state.userReducer.info || {}
});

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

const App = props => {
  const name = props.info.name;
  const seatSituation = props.seat ? (
    <h1>
      Your seat is {props.seat}
      {name ? ", " + name : ""}.
    </h1>
  ) : (
    <h1> Take a seat{name ? ", " + name : ""}!</h1>
  );

  return (
    <div className="App">
      <header className="App-header">
        <UserForm></UserForm>
        {seatSituation}
        <pre>
          {" "}
          state:
          {JSON.stringify(props)}
        </pre>
        <Table></Table>
      </header>
    </div>
  );
};

App.propTypes = {
  seat: string.isRequired,
  info: shape({
    name: string
  }).isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import { connect } from "react-redux";
import "../App.css";

import Table from "./Table";

const DEFAULT_NUMBER_OF_TABLES = 2

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

function createTables(numberOfTables) {
  return [...Array(numberOfTables).keys()].map(x => <Table key={"table" + x} tableId={x}></Table>)
}

const Sitsit = (props) => {
  const numberOfTables = props.numberOfTables || DEFAULT_NUMBER_OF_TABLES;
  const tables = props.tables || createTables(numberOfTables);

  return (
    <div>{tables}</div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Sitsit);

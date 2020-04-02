import React from "react";
import { connect } from "react-redux";
import "../App.css";

import Table from "./Table";
import { arrayOf, number } from "prop-types";
import { table } from "../propTypes";
import { DEFAULT_NUMBER_OF_TABLES } from "../constants/components";

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const propTypes = {
    tables: arrayOf(table),
    numberOfTables: number,
};

function createTables(numberOfTables) {
    return [...Array(numberOfTables).keys()].map(x => (
        <Table key={"table" + x} tableId={x}></Table>
    ));
}

const Sitsit = props => {
    const numberOfTables = props.numberOfTables || DEFAULT_NUMBER_OF_TABLES;
    const tables = props.tables || createTables(numberOfTables);

    return <div className='tablesDiv'>{tables}</div>;
};

Sitsit.propTypes = propTypes;

export { Sitsit, createTables };
export default connect(mapStateToProps, mapDispatchToProps)(Sitsit);

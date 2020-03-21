import React from "react";
import "../App.css";

import Table from "./Table";
import { arrayOf, number } from "prop-types";
import { table } from "../propTypes";

const DEFAULT_NUMBER_OF_TABLES = 2;

const propTypes = {
    tables: arrayOf(table),
    numberOfTables: number,
};

function createTables(numberOfTables) {
    return [...Array(numberOfTables).keys()].map(x => <Table key={"table" + x} tableId={x}></Table>);
}

const Sitsit = (props) => {
    const numberOfTables = props.numberOfTables || DEFAULT_NUMBER_OF_TABLES;
    const tables = props.tables || createTables(numberOfTables);

    return (
        <div>{tables}</div>
    );
};

Sitsit.propTypes = propTypes;

export default Sitsit;

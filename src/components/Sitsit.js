import React from "react";
import { arrayOf, number } from "prop-types";

import Table from "../containers/Table";
import { table } from "../propTypes";
import "../App.css";

import { DEFAULT_NUMBER_OF_TABLES } from "../constants/components";

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

    return <div className="tablesDiv">{tables}</div>;
};

Sitsit.propTypes = propTypes;
export { Sitsit, createTables };
export default Sitsit;

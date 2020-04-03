import React from "react";

import Table from "../containers/Table";
import { sitsit } from "../propTypes";
import "../App.css";

import { DEFAULT_NUMBER_OF_TABLES } from "../constants/components";

const propTypes = {
    sitsit: sitsit,
};

function createTables(numberOfTables) {
    return [...Array(numberOfTables).keys()].map(x => (
        <Table key={"table" + x} tableId={x}></Table>
    ));
}

const Sitsit = props => {
    const numberOfTables = props.sitsit.numberOfTables || DEFAULT_NUMBER_OF_TABLES;
    const tables = props.sitsit.tables || createTables(numberOfTables);

    return <div className="tablesDiv">{tables}</div>;
};

Sitsit.propTypes = propTypes;
export { Sitsit, createTables };
export default Sitsit;

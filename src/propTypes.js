import { shape, string, object, number, arrayOf } from "prop-types";

export const userInfo = shape({
    name: string,
});

export const userFormInfo = shape({
    name: string,
});

export const table = object;

export const sitsit = shape({
    name: string,
    numberOfTables: number,
    tables: arrayOf(table),
});

export const sitsitForm = shape({
    name: string,
    numberOfTables: number,
    tables: arrayOf(table),
});


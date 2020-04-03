import { shape, string, object } from "prop-types";

export const userInfo = shape({
    name: string,
});

export const userFormInfo = shape({
    name: string,
});

export const sitsit = shape({
    name: string,
});

export const sitsitForm = shape({
    name: string,
});

export const table = object;

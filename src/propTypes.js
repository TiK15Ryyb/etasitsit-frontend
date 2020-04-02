import { shape, string, object } from "prop-types";

export const userInfo = shape({
    nimi: string,
});

export const userFormInfo = shape({
    nimi: string,
});

export const table = object;

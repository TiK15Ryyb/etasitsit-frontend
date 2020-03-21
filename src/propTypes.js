import Proptypes from "prop-types";

export const userInfo = Proptypes.shape({
    nimi : Proptypes.string,
});

export const userFormInfo = Proptypes.shape({
    nimi : Proptypes.string,
});

export const table = Proptypes.arrayOf(Proptypes.arrayOf(Proptypes.string));


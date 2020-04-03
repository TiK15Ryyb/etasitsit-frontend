import { DEFAULT_NUMBER_OF_SEATS, DEFAULT_NUMBER_OF_TABLES } from './constants/components.js';

const initialState = {
    userReducer: {
        seat: "",
        info: {},
    },
    sitsitReducer: {
        sitsit: {
            name: "",
            numberOfTables: DEFAULT_NUMBER_OF_TABLES,
            seatsPerTable: DEFAULT_NUMBER_OF_SEATS,
        },
    },
};

export default initialState;

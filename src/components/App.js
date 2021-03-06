import React from "react";
import { string } from "prop-types";

import Sitsit from "../containers/Sitsit";
import UserForm from "../containers/UserForm";
import { userInfo } from "../propTypes";
import "../App.css";

const propTypes = {
    seat: string.isRequired,
    info: userInfo.isRequired,
};

const App = props => {
    const name = props.info.name;
    const seatSituation = props.seat ? (
        <h1>
            Your seat is {props.seat}
            {name ? ", " + name : ""}.
        </h1>
    ) : (
        <h1> Take a seat{name ? ", " + name : ""}!</h1>
    );

    return (
        <div className="App">
            <header className="App-header">
                <UserForm></UserForm>
                {seatSituation}
                <pre>state: {JSON.stringify(props)}</pre>
                <Sitsit />
            </header>
        </div>
    );
};

App.propTypes = propTypes;
export { App };
export default App;

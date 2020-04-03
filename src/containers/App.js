import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = state => ({
    seat: state.userReducer.seat || "",
    info: state.userReducer.info || {},
    sitsit: state.sitsitReducer.sitsit || {},
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);

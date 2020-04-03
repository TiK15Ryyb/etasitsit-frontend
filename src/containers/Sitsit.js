import { connect } from "react-redux";
import Sitsit from "../components/Sitsit";

const mapStateToProps = state => ({
    sitsit: state.sitsitReducer.sitsit || {},
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Sitsit);

import { connect } from "react-redux";
import { takeSeatAction } from "../actions/takeSeatAction";
import Seat from "../components/Seat";

const mapStateToProps = state => ({
    taken: state.userReducer.seat || "",
});

const mapDispatchToProps = dispatch => ({
    takeSeatAction: id => dispatch(takeSeatAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Seat);

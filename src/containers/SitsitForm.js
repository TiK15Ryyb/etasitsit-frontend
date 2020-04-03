import { connect } from "react-redux";
import { submitSitsitAction } from "../actions/submitSitsitAction";
import { updateSitsitFormAction } from "../actions/updateSitsitFormAction";
import SitsitForm from "../components/SitsitForm";

const mapStateToProps = state => ({
    sitsit: state.sitsitReducer.sitsit || {},
    sitsitForm: state.sitsitReducer.sitsitForm || {},
});

const mapDispatchToProps = dispatch => ({
    submitSitsitAction: info => dispatch(submitSitsitAction(info)),
    updateSitsitFormAction: info => dispatch(updateSitsitFormAction(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SitsitForm);

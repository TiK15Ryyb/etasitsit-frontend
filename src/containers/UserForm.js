import { connect } from "react-redux";
import { submitUserInfoAction } from '../actions/submitUserInfoAction';
import { updateUserInfoFormAction } from '../actions/updateUserInfoFormAction';
import UserForm from "../components/UserForm";


const mapStateToProps = state => ({
    info: state.userReducer.info || {},
    form: state.userReducer.form || {},
});

const mapDispatchToProps = dispatch => ({
    submitUserInfoAction: info => dispatch(submitUserInfoAction(info)),
    updateUserInfoFormAction: info => dispatch(updateUserInfoFormAction(info)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

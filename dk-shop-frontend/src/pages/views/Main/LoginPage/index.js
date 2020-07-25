import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import LoginPage from "./LoginPage";

import { login } from "actions/login";

const mapStateToProps = (state) => ({
  userLogin: state.login,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

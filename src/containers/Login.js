import { connect } from "react-redux";
import { removeBus, setUser } from "../redux/actions";
import Login from "../components/Login";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBusiness: (id) => dispatch(removeBus(id)),
    setUser: (username) => dispatch(setUser(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

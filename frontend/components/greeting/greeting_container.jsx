import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions'
//both functions are invoked when redux store updates
//determines and constructs props that are passed into presentational components

//basically want to get users data from state (selector.js)
const getUserInfo = (state) => {
  let currUserId = state.session.id;
  return state.entities.users[currUserId];
}


const mapStateToProps = state => ({
  currentUser: getUserInfo(state)
});

//giving it logout action for logout privileges
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions'
import React from 'react';
import { Link } from 'react-router-dom';

//list of errors from the state

const mapStateToProps = state => ({
  errors: state.errors.session,
  formType: 'login',
  navLink: <Link to="/signup">sign up here</Link>,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
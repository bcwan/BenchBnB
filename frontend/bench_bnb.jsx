import React from "react";
import ReactDOM from "react-dom";
import { postUser, deleteSession, postSession } from './util/session_api_util';
import { usersReducer } from './reducers/users_reducer';
import configureStore from './store/store';
import Root from "./components/root";

import { login } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;




  window.login = login;

  window.postUser = postUser;
  window.postSession = postSession; 
  window.deleteSession = deleteSession;
  window.usersReducer = usersReducer;

  ReactDOM.render(<Root store={store} />, root);
});
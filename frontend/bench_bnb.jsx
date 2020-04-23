import React from "react";
import ReactDOM from "react-dom";
import { postUser, deleteSession, postSession } from './util/session_api_util';
import { usersReducer } from './reducers/users_reducer';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  window.postUser = postUser;
  window.postSession = postSession; 
  window.deleteSession = deleteSession;
  window.usersReducer = usersReducer;

  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
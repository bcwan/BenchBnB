import React from "react";
import ReactDOM from "react-dom";
import { postUser, deleteSession, postSession } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  window.postUser = postUser;
  window.postSession = postSession; 
  window.deleteSession = deleteSession; 
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
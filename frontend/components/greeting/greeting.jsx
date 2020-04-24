import React from 'react';
import { Link } from 'react-router-dom'


const Greeting = (props) => {

  if(props.currentUser) {
    return (
      <div>
        <p>{props.currentUser.username}</p>
        <button onClick={props.logout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    )
  }
};

export default Greeting;

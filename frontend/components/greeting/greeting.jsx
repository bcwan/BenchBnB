import React from 'react';


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
        <p>
          Not logged in!
        </p>
      </div>
    )
  }
};

export default Greeting;

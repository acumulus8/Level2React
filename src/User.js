import React, { Component, Fragment } from "react";
import { UserContext } from "./UserContext";

class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h1>User Component!</h1>
            <h3>{context.user.name}</h3>
            <h4>{context.user.email}</h4>
            <button onClick={context.logout}>Log Out</button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default User;

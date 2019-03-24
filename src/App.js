import React, { Component, Fragment, createContext } from "react";
import { Transition } from "react-spring";

import styled from "styled-components";
import { Toggle } from "Utilities";
import { Modal } from "Elements";
import { UserContext } from "./UserContext";
import UserProvider from "./UserProvider";
import User from "./User";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <User />
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <LoginButton onClick={toggle}>Login</LoginButton>
                <Modal on={on} toggle={toggle}>
                  <h1>This is the modal!</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>
        </div>
      </UserProvider>
    );
  }
}

const Header = styles => {
  return <h1 style={{ ...styles }}>Showing now!</h1>;
};

const LoginButton = styled.div`
  margin: 0 auto;
  position: relative;
  top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(20, 150, 220, 0.8);
  color: white;
  width: 5rem;
  height: 2rem;
  border-radius: 3px;
  cursor: pointer;
`;

export default App;

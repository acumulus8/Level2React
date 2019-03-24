import React, { Component } from "react";
import ReactDOM from "react-dom";

//lots of standard javascript here being used to create/remove elements
//as well as to get in touch with the portal div in the .html file.

const portalRoot = document.getElementById("portal");

class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement("div");
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  };

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  };

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;

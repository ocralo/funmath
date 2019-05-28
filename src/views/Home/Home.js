import React, { Component } from "react";
import "./Home.css";
import Menu from "../../components/Menu/Menu";

import { Entity, Scene } from "aframe-react";

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      lastName: ""
    };
  }
  handleClick = event => {};

  handleSubmit = event => {};

 
  render() {
    return (
      <section className="container-fluid h-100 w-100 m-0 p-0">
        <Menu />
        <div className="row m-0 p-0">
          <div className="col-12 m-0 p-0">
            
          </div>
        </div>
      </section>
    );
  }
}

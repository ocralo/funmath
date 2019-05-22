import React, { Component } from "react";
import "./Login.css";


export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      lastName: ""
    };
  }
  handleSumit = event => {
    this.props.history.push("/Home");
  };
  render() {
    return (
      <section className="container-fluid rel-container">

      </section>
    );
  }
}

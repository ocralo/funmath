import React, { Component } from "react";
import "./Menu.css";

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 m-0 shadow-sm m-0 p-0">
        <div className="container-fluid m-0 p-0 rel-title-menu-container">
          <div className="navbar-brand rel-title-menu-navbar pl-4 h-100 pt-0 pb-0 d-flex justify-content-center align-items-start">
            <img src="./assets/img/dragon.svg" alt="logo funmath" />
            <h1>Inicio</h1>
          </div>
          <div className="pr-4">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button">
                  Action
                </button>
                <button class="dropdown-item" type="button">
                  Another action
                </button>
                <button class="dropdown-item" type="button">
                  Something else here
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

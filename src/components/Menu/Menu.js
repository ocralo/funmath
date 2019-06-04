import React, { Component } from "react";
import "./Menu.css";

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "anonimo",
      lastName: "anonimo"
    };
    this.backPage = this.backPage.bind(this);
  }
  handleClick = event => { };

  backPage() {
    this.props.backPage();
  }

  handleSubmit = event => {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 m-0 shadow-sm m-0 p-0">
        <div className="container-fluid m-0 p-0 rel-title-menu-container">
          <div className="navbar-brand rel-title-menu-navbar pl-4 h-100 pt-0 pb-0 d-flex justify-content-center align-items-start">
            <h1>
              <i className="fas fa-angle-left rel-icon-menu" onClick={this.backPage}/>
              {this.props.title}
            </h1>
          </div>
          <div className="pr-4 d-flex align-items-center justify-content-center">
            <p className="p-0 mb-0 mr-2 d-inline-block text-truncate rel-name-user-title">
              {this.props.name}
            </p>
            <div className="dropdown">
              <img
                src="./assets/img/user.svg"
                className="rel-icon-user"
                alt="logo funmath"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenu2"
              >
                <button className="dropdown-item" type="button">
                  Cerrar sesion
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

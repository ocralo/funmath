import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      lastName: ""
    };
    this.email = React.createRef();
    this.password = React.createRef();
    this.handleSumit = this.handleSumit.bind(this);
  }
  handleSumit = event => {
    this.props.history.push("/Home");
  };
  render() {
    return (
      <section className="container-fluid h-100 w-100">
        <div className="row justify-content-md-center align-items-center d-flex justify-content-center flex-column align-items-center">
          <div className="card shadow col-md-4 col-8 mt-5">
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <img src="/Assets/img/dragon.svg" alt="Logo drago" />
              <h2 className="rel-title-log">FUNMATH</h2>
              <form className="d-flex justify-content-center flex-column w-100">
                <div className="form-group d-flex flex-column">
                  <label className="pure-material-textfield-outlined">
                    <input placeholder=" " ref={this.email} />
                    <span>Correo electronico</span>
                  </label>

                  <label className="pure-material-textfield-outlined">
                    <input
                      type="password"
                      placeholder=" "
                      ref={this.password}
                    />
                    <span>Contraseña</span>
                  </label>
                </div>
                <div className="rel-btn-login-content w-100">
                  <button
                    type="submit"
                    className="btn btn-primary rel-btn-login w-100"
                  >
                    INICIAR SESÍON
                  </button>
                  <button
                    type="submit"
                    className="btn btn-light border d-flex justify-content-around w-100"
                  >
                    <img
                      src="./Assets/img/google.svg"
                      alt="icono de Google"
                      className="rel-icon-login-google"
                    />
                    INICIAR SESÍON CON GOOGLE
                  </button>
                </div>
                <hr />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";
import "./Home.css";
import Menu from "../../components/Menu/Menu";
import Card from "../../components/Cards/Card";

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      lastName: ""
    };
    this.changePage = this.changePage.bind(this);
  }
  handleClick = event => { };
  
  changePage(page) {
    console.log(page);
    this.props.history.push(page);
  }

  handleSubmit = event => {};

  render() {
    return (
      <section className="container-fluid h-100 w-100 m-0 p-0">
        <Menu title="Inicio" />
        <div className="container">
          <div className="row mt-5">
            <Card
              title="Ejecicios"
              url="/exercises"
              changePage={this.changePage}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida congue aliquet. Donec convallis lacus vitae justo viverra sagittis. Praesent a mollis nunc, sit amet congue elit. "
            />
            <Card
              title="Ejemplos"
              url="gg2"
              changePage={this.changePage}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida congue aliquet. Donec convallis lacus vitae justo viverra sagittis. Praesent a mollis nunc, sit amet congue elit. "
            />
            <Card
              title="Calificaciones"
              url="gg3"
              changePage={this.changePage}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida congue aliquet. Donec convallis lacus vitae justo viverra sagittis. Praesent a mollis nunc, sit amet congue elit. "
            />
          </div>
        </div>
      </section>
    );
  }
}

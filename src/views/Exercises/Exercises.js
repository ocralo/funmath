import React, { Component } from "react";
import "./Exercises.css";
import Menu from "../../components/Menu/Menu";
import Card from "../../components/Cards/Card";

export default class Exercises extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      lastName: ""
    };
    this.changePage = this.changePage.bind(this);
  }
  handleClick = event => {};

  changePage(page) {
    console.log(page);
    this.props.history.push(page);
  }

  render() {
    return (
      <section className="container-fluid h-100 w-100 m-0 p-0">
        <Menu title="Ejercisios" />
        <div className="container">
          <div className="row mt-5">
            <Card
              title="Ejercisio 1"
              url="/question"
              changePage={this.changePage}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida congue aliquet. Donec convallis lacus vitae justo viverra sagittis. Praesent a mollis nunc, sit amet congue elit. "
            />
            <Card
              title="Ejercisio 2"
              url="gg2"
              changePage={this.changePage}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida congue aliquet. Donec convallis lacus vitae justo viverra sagittis. Praesent a mollis nunc, sit amet congue elit. "
            />
            <Card
              title="Ejercisio 3"
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

import React, { Component } from "react";
import "./Exercises.css";
import Menu from "../../components/Menu/Menu";

export default class Exercises extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e, dato) {
  }

  render() {
    return (
     <section className="container-fluid h-100 w-100 m-0 p-0">
        <Menu title="Ejercisios"/>
        <div className="container">
                <div className="row mt-5">
                    
                </div>
            </div>
            </section>
                
    );
  }
}

import React, { Component } from "react";
import "./Card.css";


export default class Card extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(e,dato) {
      console.log(dato)
  }

  render() {
    return (
      <div className="col-md-3 m-3 card rounded p-0 shadow">
        <div className="rel-card-title pb-0 d-flex justify-content-center align-items-start">
          <h5>{this.props.title}</h5>
        </div>
        <div className="card-body">
          <p>{this.props.content}</p>
        </div>
        <div className="w-100 d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-info btn-sm mb-2 mr-2 w-25 shadow-sm"
            onClick={e => this.handleClick(e, this.props.url)}
          >
            ir
          </button>
        </div>
      </div>
    );
  }
}

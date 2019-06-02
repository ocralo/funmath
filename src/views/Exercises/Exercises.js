import React, { Component } from "react";
import "./Exercises.css";
import Menu from "../../components/Menu/Menu";
import Card from "../../components/Cards/Card";
import firebase from "firebase";

export default class Exercises extends Component {
  constructor(props) {
    super();
    this.state = {
      exercises: {}
    };
    this.changePage = this.changePage.bind(this);
  }
  handleClick = event => {};

  componentWillMount() {
    const attemptCard = firebase
      .database()
      .ref()
      .child("gameCase");
    attemptCard.on("value", snapshot => {
      console.log(snapshot.val());
      this.setState({
        exercises: snapshot.val()
      });
    });
  }

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
            {Object.keys(this.state.exercises).map((key, i) => {
              if (key === "videos") {
              } else {
                return (
                  <Card
                    key={i}
                    title={key}
                    url="/question"
                    changePage={this.changePage}
                    content={this.state.exercises[key].question}
                  />
                );
              }
            })}
          </div>
        </div>
      </section>
    );
  }
}

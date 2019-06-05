import React, { Component } from "react";
import "./Example.css";
import Menu from "../../components/Menu/Menu";
import Card from "../../components/Cards/Card";
import firebase from "firebase";

export default class Example extends Component {
  constructor(props) {
    super();
    this.state = {
      examples: {},
      name: ""
    };
    this.changePage = this.changePage.bind(this);
    this.backPage = this.backPage.bind(this);
  }
  handleClick = event => {};

  componentWillMount() {
    const attemptCard = firebase
      .database()
      .ref()
      .child("examples");
    attemptCard.on("value", snapshot => {
      console.log(snapshot.val());
      this.setState({
        examples: snapshot.val()
      });
    });
    try {
      console.log(this.props.location.state.name);
      if (
        this.props.location.state.name === "" ||
        this.props.location.state.name === undefined
      ) {
      } else {
        sessionStorage.setItem("name", this.props.location.state.name);
      }
    } catch {}
    this.setState({
      name: sessionStorage.getItem("name")
    });
  }

  backPage() {
    console.log("gg");
    this.props.history.push({
      pathname: "./home"
    });
  }

  changePage(page, contentQuestion, titleQuestion, question, video) {
    console.log(page);
    this.props.history.push({
      pathname: page,
      state: {
        content: contentQuestion,
        title: titleQuestion,
        question: question,
        video: video,
        name: sessionStorage.getItem("name")
      }
    });
  }

  render() {
    return (
      <section className="container-fluid h-100 w-100 m-0 p-0">
        <Menu
          title="Ejercisios"
          backPage={this.backPage}
          name={this.state.name}
        />
        <div className="container">
          <div className="row mt-5">
            {Object.keys(this.state.examples).map((key, i) => {
              return (
                <Card
                  key={i}
                  title={this.state.examples[key].title}
                  url="/question"
                  changePage={this.changePage}
                  content={this.state.examples[key].content}
                  question={this.state.examples[key]}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

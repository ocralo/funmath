import React, { Component } from "react";
import "./Answer.css";
import Menu from "../../components/Menu/Menu";
import firebase from "firebase";

var tiempo, interval;

export default class Answer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: "",
      time: tiempo
    };
    this.preguntas = React.createRef();
    this.viewQuestion = this.viewQuestion.bind(this);
    this.noViewQuestion = this.noViewQuestion.bind(this);

    this.answerCorrect = this.answerCorrect.bind(this);
    this.answerNoCorrect = this.answerNoCorrect.bind(this);

    this.ChangeScene = this.ChangeScene.bind(this);
    this.backPage = this.backPage.bind(this);
  }

  viewQuestion() {
    this.preguntas.current.style.display = "block";
  }

  noViewQuestion() {
    this.preguntas.current.style.display = "none";
  }

  componentWillMount() {
    const attemptCard = firebase
      .database()
      .ref()
      .child("preguntas");

    attemptCard.on("value", snapshot => {
      const i = this.props.location.state.question + 1;
      console.log(
        this.props.location.state.question +
          " " +
          this.props.location.state.answer
      );
      const asw = snapshot.val()["pregunta" + i].correctASW;
      if (asw == this.props.location.state.answer) {
        this.setState({
          source:
            "https://firebasestorage.googleapis.com/v0/b/funmath-4af76.appspot.com/o/imagenes%2FCorrecto.jpeg?alt=media&token=4f071a97-bdc1-4902-99fe-8411c0175c9e"
        });
      } else {
        console.log("incorrecto" + " " + asw);
        this.setState({
          source:
            "https://firebasestorage.googleapis.com/v0/b/funmath-4af76.appspot.com/o/imagenes%2FIncorrecto.jpeg?alt=media&token=e51f30a7-f083-4ce5-acca-7b6960fa31b9"
        });
      }
    });
  }

  componentDidMount() {}
  //preguntas
  answerCorrect() {
    clearInterval(interval);
    this.props.history.push("/InteractiveSound");
    console.log("correcto");
  }
  answer(response) {
    clearInterval(interval);
    this.props.history.push({
      pathname: "/answer",
      state: {
        answer: response
      }
    });
  }

  ChangeScene(scene) {
    clearInterval(interval);
    this.props.history.push(scene);
    console.log("correcto");
  }

  answerNoCorrect() {
    console.log("incorrecto");
  }

  backPage() {
    console.log("gg");
    clearInterval(interval);
    this.props.history.push({
      pathname: "./exercises"
      /* state: {
          data: this.state.exercises
        } */
    });
  }

  render() {
    return (
      <div className="container-fluid p-0 w-100">
        <Menu title="Respuesta" backPage={this.backPage} />
        <div
          className="row m-0 p-0 justify-content-center"
        >
          <img src={this.state.source} alt="qr image" />
        </div>
      </div>
    );
  }
}

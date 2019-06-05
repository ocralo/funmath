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
    });
  }

  render() {
    return (
      <div className="container-fluid p-0 w-100">
        <Menu title="Respuesta" backPage={this.backPage} />
        <div className="row m-0 p-0 d-flex flex-column align-items-center align-content-between justify-content-center">
          <img src={this.state.source} alt="qr" />
          <h3>
            Para ver su respuesta, por favor escanea el siguiente código QR
            mediante la aplicación Meotino.
          </h3>
          <h5>
            Si aún no cuenta con la aplicación, puede descargarla dando clic
            en el siguiente botón.
          </h5>
          <br />
          <a
            class="btn btn-info btn-lg text-uppercase"
            href="https://drive.google.com/file/d/1kN2Bsn84nisL6GmKaRaTEvtmke7FwiTw/view?usp=sharing"
            role="button"
          >
            Descargar
          </a>
        </div>
      </div>
    );
  }
}

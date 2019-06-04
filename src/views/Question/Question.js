import React, { Component } from "react";
import "./Question.css";
import "video-react/dist/video-react.css";
import { Player, ControlBar, BigPlayButton } from "video-react";
import Menu from "../../components/Menu/Menu";
import firebase from "firebase";

const sources = {
  sintelTrailer: "./assets/video/Que_es_Multimedia.mp4",
  bunnyTrailer:
    "https://firebasestorage.googleapis.com/v0/b/funmath-4af76.appspot.com/o/Videos%2FReto%201%20(opcion2).mp4?alt=media&token=ef513670-b7d5-4e44-b286-9fec02b07fe9"
};

var tiempo, interval;

export default class Question extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: "",
      time: tiempo,
      timeF:100
    };
    this.preguntas = React.createRef();
    this.viewQuestion = this.viewQuestion.bind(this);
    this.noViewQuestion = this.noViewQuestion.bind(this);

    this.answerCorrect = this.answerCorrect.bind(this);
    this.answerNoCorrect = this.answerNoCorrect.bind(this);

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
    this.ChangeScene = this.ChangeScene.bind(this);
    this.backPage = this.backPage.bind(this);

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.refs.player.play();
  }

  pause() {
    this.refs.player.pause();
  }

  load() {
    this.refs.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.refs.player.getState();
      const currentTime = player.currentTime;
      this.refs.player.seek(currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.refs.player.seek(seconds);
    };
  }
  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const playbackRate = player.playbackRate;
      this.refs.player.playbackRate = playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const volume = player.volume;
      this.refs.player.volume = volume + steps;
    };
  }

  setMuted(muted) {
    return () => {
      this.refs.player.muted = muted;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
      this.refs.player.load();
    };
  }
  changeTime() {
    const { player } = this.refs.player.getState();
    tiempo = player.currentTime;
    this.setState({
      time: tiempo
    });
    this.detecTime(tiempo);
    console.log(tiempo);
  }
  detecTime(time) {
    if (time >= this.state.timeF-3 && time < this.state.timeF) {
      this.viewQuestion();
    } else if (time >= this.state.timeF) {
      this.pause();
      this.viewQuestion();
    } else {
      this.noViewQuestion();
    }
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
      .child("videos");
    const me = this;
    attemptCard.on("value", snapshot => {
      me.setState(
        {
          source: snapshot.val()["video" + me.props.location.state.video].video,
          timeF:snapshot.val()["video" + me.props.location.state.video].time
        },
        () => {
          me.refs.player.load();
        }
      );
    });
  }

  componentDidMount() {
    console.log(this.props.location.state);
    clearInterval(interval);
    var me = this;
    var promise = new Promise((resolve, reject) => {
      interval = setInterval(function() {
        resolve(me.changeTime());
      }, 250);
    });
    promise.then(successMessage => {
      console.log("gg");
    });
  }
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
        answer: response,
        question: this.props.location.state.video - 1
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
      <div className="container-fluid p-0">
        <Menu
          title={this.props.location.state.title}
          backPage={this.backPage}
        />
        <Player
          ref="player"
          autoPlay
          fluid={false}
          width={window.innerWidth}
          height={window.innerHeight}
        >
          <BigPlayButton position="center" />
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
        <div
          className="container-fluid rel-container-preguntas"
          ref={this.preguntas}
        >
          <div className="row justify-content-center text-center ">
            <h3 className="w-75">{this.props.location.state.content}</h3>
          </div>
          <div className="row justify-content-center text-center ">
            <div className="col-md-6">
              <div className="row justify-content-center">
                {Object.keys(this.props.location.state.question).map(
                  (key, i) => {
                    return (
                      <button
                        onClick={e => this.answer(i + 1)}
                        className="btn rel-button-question w-100 col-md-4 col-11 ml-2"
                        key={i}
                      >
                        {this.props.location.state.question[key]}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

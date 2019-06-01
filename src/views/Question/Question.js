import React, { Component } from "react";
import "./Question.css";
import "video-react/dist/video-react.css";
import { Player, ControlBar } from "video-react";

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
      source: sources["bunnyTrailer"],
      time: tiempo
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
    if (time >= 23 && time <= 26) {
      this.viewQuestion();
    } else if (time >= 28) {
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
  componentDidMount() {
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

  ChangeScene(scene) {
    clearInterval(interval);
    this.props.history.push(scene);
    console.log("correcto");
  }

  answerNoCorrect() {
    console.log("incorrecto");
  }

  render() {
    return (
      <div className="container-fluid p-0">
        <Player
          ref="player"
          autoPlay
          fluid={false}
          width={window.innerWidth}
          height={window.innerHeight}
        >
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
        <div
          className="container-fluid rel-container-preguntas"
          ref={this.preguntas}
        >
          <div className="row justify-content-center text-center ">
            <div className="col-3 mt-5">
              <button
                onClick={e => this.ChangeScene("/VideoContent")}
                className="rel-button-question w-100"
              />
              <button
                onClick={e => this.ChangeScene("/VideoHardWare")}
                className="rel-button-question w-100"
              />
            </div>
            <div className="col-3  mt-5">
              <button
                onClick={e => this.ChangeScene("/InteractiveGesture")}
                className="rel-button-question w-100 "
              />
              <button
                onClick={e => this.ChangeScene("/InteractiveSound")}
                className="rel-button-question w-100 "
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

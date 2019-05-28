import React, { Component } from "react";
import "./AR.css";

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      lastName: ""
    };
  }
  handleClick = event => {};

  handleSubmit = event => {};

  /* 
    <a-scene embedded arjs="sourceType: webcam;">
                <a-sphere
                  position="0 0 0"
                  material="opacity: 1; color: yellow;"
                />
                <a-marker-camera preset="hiro" />
              </a-scene> */
  render() {
    return (
      <section className="container-fluid h-100 w-100 m-0 p-0">
        <div className="row m-0 p-0">
          <div className="col-12 m-0 p-0">
            <div style={{ height: "100vh", width: "100vw" }}>
              <a-scene embedded arjs="sourceType: webcam;">
                <a-marker-camera preset="hiro">
                  <a-video
                    src="./assets/video/Correcto_video.webm"
                    width="3"
                    height="1.5"
                    position="0 0 0"
                    rotation="-90 0 0"
                    transparent="true"
                  />
                </a-marker-camera>
              </a-scene>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

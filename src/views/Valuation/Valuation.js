import React, { Component } from "react";
import "./Valuation.css";
import Menu from "../../components/Menu/Menu";
import { HorizontalBar } from "react-chartjs-2";
import firebase from "firebase";

export default class Valuation extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: ""
    };

    this.backPage = this.backPage.bind(this);
  }

  componentWillMount() {
    const attemptCard = firebase
      .database()
      .ref()
      .child("users");

      attemptCard.on("value", snapshot => { });
      
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

  componentDidMount() {}

  backPage() {
    console.log("gg");
    this.props.history.push({
      pathname: "./home"
    });
  }

  render() {
    const data = {
      labels: ["pregunta1", "pregunta2", "pregunta3"],
        datasets: [
            {
                label: "respuestas",
                backgroundColor: "#2AA1AF",
                data: [2, 3, 5]
        }
      ]
    };
    return (
      <div className="container-fluid p-0 w-100 h-100">
        <Menu
          title="Calificaciones"
          backPage={this.backPage}
          name={this.state.name}
        />
        <div className="row m-0 p-0 rel-chart-bar justify-content-center">
          <HorizontalBar
            data={data}
            width={50}
            height={100}
            options={{
              maintainAspectRatio: false,
              scales: {
                xAxes: [
                  {
                    stacked: true
                  }
                ],
                yAxes: [
                  {
                    stacked: true
                  }
                ]
              }
            }}
          />
        </div>
      </div>
    );
  }
}

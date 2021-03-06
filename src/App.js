import React from "react";
import "./App.css";
import Loadable from "react-loadable";
import { HashRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as firebase from "firebase";

const loading = () => (
  <div className="rel-cargando">
    <div id="loading" />
  </div>
);

const Login = Loadable({
  loader: () => import("./views/Login/Login"),
  loading
});

const Home = Loadable({
  loader: () => import("./views/Home/Home"),
  loading
});

const Exercises = Loadable({
  loader: () => import("./views/Exercises/Exercises"),
  loading
});

const AR = Loadable({
  loader: () => import("./views/AR/AR"),
  loading
});

const Question = Loadable({
  loader: () => import("./views/Question/Question"),
  loading
});
const Video = Loadable({
  loader: () => import("./views/Video/Video"),
  loading
});
const Answer = Loadable({
  loader: () => import("./views/Answer/Answer"),
  loading
});
const Valuation = Loadable({
  loader: () => import("./views/Valuation/Valuation"),
  loading
});

const Example = Loadable({
  loader: () => import("./views/Example/Example"),
  loading
});

// Configuracion de firebase
const firebaseConfig = {
  apiKey: "AIzaSyBsl6DZ-RS-xr3i3ISEjigB-28-XRmgAc4",
  authDomain: "funmath-4af76.firebaseapp.com",
  databaseURL: "https://funmath-4af76.firebaseio.com",
  projectId: "funmath-4af76",
  storageBucket: "funmath-4af76.appspot.com",
  messagingSenderId: "695702166780",
  appId: "1:695702166780:web:ffb0c423e15557fe"
};
// Inicializacion de firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" name="Login - Funmath" component={Login} />
        <Route exact path="/Home" name="Home - Funmath" component={Home} />
        <Route exact path="/AR" name="AR - Funmath" component={AR} />
        <Route
          exact
          path="/Exercises"
          name="Exercises - Funmath"
          component={Exercises}
        />
        <Route
          exact
          path="/Question"
          name="Question - Funmath"
          component={Question}
        />
        <Route exact path="/Video" name="Video - Funmath" component={Video} />
        <Route
          exact
          path="/Answer"
          name="Answer - Funmath"
          component={Answer}
        />
        <Route
          exact
          path="/Valuation"
          name="Valuation - Funmath"
          component={Valuation}
        />
        <Route
          exact
          path="/Example"
          name="Example - Funmath"
          component={Example}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;

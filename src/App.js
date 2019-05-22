import React from 'react';
import logo from './logo.svg';
import './App.css';
import Loadable from "react-loadable";
import { HashRouter, Route, Switch } from "react-router-dom";
import * as firebase from "firebase";

const loading = () => (
  <div className="rel-cargando">
    <div id="loading" />
  </div>
);

const Login = Loadable({
  loader: () => import("./vista/Login/Login"),
  loading
});

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" name="Login - Funmath" component={Login} />
      </Switch>
    </HashRouter>
  );
}

export default App;

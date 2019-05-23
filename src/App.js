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
      </Switch>
    </HashRouter>
  );
}

export default App;

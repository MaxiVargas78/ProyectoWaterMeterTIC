import React, {Component} from 'react';
import logo from './Logowatermeter.png';
import './App.css';
import firebase from 'firebase';
import withFirebaseAuth from 'react-with-firebase-auth';
//import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import "./style.css";
import SideBar from "./sidebar";

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth ();
const providers= {
    googleProvider: new firebase.auth.GoogleAuthProvider (),
  };


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTask: "",
    };
  }
  
  
  render() {

    const {
      user, signOut, signInWithGoogle, 
    } = this.props;
  return (
    <div className="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Bienvenido a WaterMeter!
        </p>
        {
          user
            ? <p>Hola, {user.displayName}!</p>
            :<p>Ingresa para ver tus datos.</p>
        }
        {
          user
            ? <button onClick={signOut}>Cerrar Sesión</button>
            :<button onClick={signInWithGoogle}>Inicia Sesión con Google</button>

        }
      </header>
    </div>
  );
  }
}
export default withFirebaseAuth({
  providers, firebaseAppAuth,
})(App);


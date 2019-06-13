import React from 'react';
import ReactDOM from 'react-dom';
//import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*firebase.initializeApp({
     
    apiKey: "AIzaSyA07yiYFXaegZamU3CCCwQGKU_aOdoenjs",
    authDomain: "watermeterreal.firebaseapp.com",
    databaseURL: "https://watermeterreal.firebaseio.com",
    projectId: "watermeterreal",
    storageBucket: "watermeterreal.appspot.com",
    messagingSenderId: "570849420369",
    appId: "1:570849420369:web:ca29a93225be66f1"
})*/

ReactDOM.render(
<App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

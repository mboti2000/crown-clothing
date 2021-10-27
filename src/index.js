import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import  {store, persistor}  from './redux/store';
import { initializeApp } from "firebase/app";
import { PersistGate } from 'redux-persist/integration/react';
import { collection, addDoc, getDoc } from "firebase/firestore"; 
import { getFirestore, doc } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOayr2GQNiTVXnpzHHGPwXJYpeWI4hBYQ",
  authDomain: "crown-clothing-bef4d.firebaseapp.com",
  projectId: "crown-clothing-bef4d",
  storageBucket: "crown-clothing-bef4d.appspot.com",
  messagingSenderId: "1086973267551",
  appId: "1:1086973267551:web:e167002ee63c91b49a15ea",
  measurementId: "G-NSL40E39G3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const createUserProfileDocument = async(user, ...additionalData)=>{
    try {
        console.log(user);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        const {email, displayName} = user;
        const createdAt = new Date();

        if(!docSnap.exists()){
          const userRef = await addDoc(collection(db, "users"), {
            displayName,
            email,
            createdAt,
          });
          return userRef;
        }

      } catch (e) {
        console.error("Error adding document: ", e);
      }

};

export {db};


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

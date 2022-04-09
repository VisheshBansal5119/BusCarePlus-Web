import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Tabs/home";
import Safety from "./Tabs/safety";
import Maintenance from "./Tabs/maintenance";
import Map from "./Tabs/map";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrNKtsgFVieRc9cY_i3Saff5iCfF8HQeY",
  authDomain: "buscareplus-db77c.firebaseapp.com",
  databaseURL: "https://buscareplus-db77c-default-rtdb.firebaseio.com",
  projectId: "buscareplus-db77c",
  storageBucket: "buscareplus-db77c.appspot.com",
  messagingSenderId: "834359603560",
  appId: "1:834359603560:web:7151bf568707a51eda66dd",
  measurementId: "G-XPMKWDNL9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="safety" element={<Safety />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="map" element={<Map />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));






// ReactDOM.render(
//   <React.StrictMode>
//     <NavBar />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


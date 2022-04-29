import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login';
import Home from "./Tabs/home";
import Safety from "./Tabs/safety";
import Maintenance from "./Tabs/maintenance";
import Map from "./Tabs/map";
// Import the functions you need from the SDKs you need


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}/>
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


// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<News  key="home" country="in" category="" />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            exact
            path="/business"
            element={<News key="business" country="in" category="business" />}
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={<News key="entertainment" country="in" category="entertainment" />}
          ></Route>
          <Route
            exact
            path="/health" 
            element={<News key="health" country="in" category="health" />}
          ></Route>
          <Route
            exact
            path="/sports"
            element={<News key="sports" country="in" category="sports" />}
          ></Route>
          <Route
            exact
            path="/science" 
            element={<News key="science" country="in" category="science" />}
          ></Route>
          <Route
            exact
            path="/technology" 
            element={<News key="technology" country="in" category="tech" />}
          ></Route>
        </Routes>
      </>
    );
  }
}

// import logo from './logo.svg';
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 12;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="home"
                country="in"
                category=""
                pageSize={this.pageSize}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                country="in"
                category="business"
                pageSize={this.pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                country="in"
                category="entertainment"
                pageSize={this.pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                country="in"
                category="health"
                pageSize={this.pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                country="in"
                category="sports"
                pageSize={this.pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                country="in"
                category="science"
                pageSize={this.pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                country="in"
                category="technology"
                pageSize={this.pageSize}
              />
            }
          ></Route>
        </Routes>
      </>
    );
  }
}

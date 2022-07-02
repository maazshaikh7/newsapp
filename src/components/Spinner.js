import React, { Component } from "react";
import loading from "./loading.gif";
//Change to better GIF later

export class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <div>
          <img
            src={loading}
            style={{ width: "350px", height: "350px", borderRadius:"50px" }}
            alt="loading"
          />
        </div>
      </div>
    );
  }
}

export default Spinner;

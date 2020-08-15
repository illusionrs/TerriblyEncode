import React from "react";

import axios from "axios";
import "./Search.css";

class Encode extends React.Component {
  constructor() {
    super();
    this.state = {
      searchdata: "",
      encodeout: "",

      valueencode: 0,
    };
  }

  callHandler = () => {
    var ds = this.state.searchdata;

    const input = {
      name: ds,
    };
    axios
      .post("http://localhost:5000/encode", input)
      .then((response) => {
        console.log("this is data", response.data);
        this.setState({
          encodeout: response.data,
          valueencode: 1,
        });
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  inputHandler = (e) => {
    this.setState({
      searchdata: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <center className="margingive">
          <label>
            Encode:
            <input
              className="searchbar"
              type="text"
              placeholder="Enter String..."
              onChange={this.inputHandler}
            />
          </label>

          <button className="bts" type="submit" onClick={this.callHandler}>
            submit
          </button>

          <div >
            {this.state.valueencode === 1 ? (
              <div className="output">{this.state.encodeout}</div>
            ) : (
              ""
            )}
          </div>
        </center>
      </div>
    );
  }
}

export default Encode;

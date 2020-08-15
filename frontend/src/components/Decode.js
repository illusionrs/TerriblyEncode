import React from "react";

import axios from "axios";
import './Search.css'

class Decode extends React.Component {
  constructor() {
    super();
    this.state = {
      searchdata: "",
     
      decodeout:"",
     
      valuedecode:0
    };
  }

  callHandler = () => {
    var ds = this.state.searchdata;

    console.log(ds)

    const input = {
      name: ds,
    };
    axios
      .post("http://localhost:5000/decode", input)
      .then((response) => {
        console.log("this is data", response.data);
        this.setState({
          decodeout:response.data,
          valuedecode:1
        })
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
              Decode:
            <input className="searchbar" type="text" placeholder="Enter String..." onChange={this.inputHandler}/>
            </label>
            
            
            <button className="bts" type="submit" onClick={this.callHandler}>
              submit
            </button>
            {
              this.state.valuedecode===1 ?
              <div className="output">
                {
                  this.state.decodeout
                }

              </div>
              : ""
            }
          </center>
        
      </div>
    );
  }
}

export default Decode;

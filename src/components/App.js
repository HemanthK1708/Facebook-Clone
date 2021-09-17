import React, { Component } from "react";
import Header from "./Bootstrap/Header";
//import FBBox from "./FBBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Header">Facebook Clone</Header>
        <div className="container">
        
        <div className="row">
        <div className="col-2">Left</div>
        <div className="col-7">Middle</div>
        <div className="col-2">Right</div>
        </div>
        </div>
      </div>
    )
  }
}

export default App;
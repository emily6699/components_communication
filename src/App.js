import React, { Component } from "react";
import "./App.css";
import Child from "./components/parentToChild/child";

class App extends Component {
  state = {
    number: 0
  };

  addNumber = () => {
    this.setState({ number: this.state.number + 1 });
  };

  subNumber = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div>
        <Child
          addNumber={this.addNumber}
          subNumber={this.subNumber}
          number={this.state.number}
        />
      </div>
    );
  }
}

export default App;

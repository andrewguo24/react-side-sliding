import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";

export default class App extends Component {
  state = {
    showSlider: false
  };

  openNav = () => {
    this.setState({ showSlider: true })
  };

  closeNav = () => {
    this.setState({ showSlider: false })
  };

  render() {
    return (
      <div>
        <div
          id="mySidenav"
          className="sidenav"
          style={{
            width: this.state.showSlider ? "250px" : "0"
          }}
        >
          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={e => this.closeNav(e)}
          >
            &times;
          </a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>

        <h2>Animated Sidenav Example</h2>
        <span onClick={e => this.openNav(e)}>&#9776; open</span>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
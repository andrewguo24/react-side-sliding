import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends Component {
  state = {
    showSlider: false
  };

  openNav = e => {
    this.setState({ showSlider: true }, e => {
      // document.getElementById("mySidenav").style.width = "250px";
    });
  };

  closeNav = e => {
    this.setState({ showSlider: false }, e => {
      // document.getElementById("mySidenav").style.width = "0";
    });
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
            class="closebtn"
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
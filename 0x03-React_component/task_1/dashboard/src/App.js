import React, { Component } from "react";
import Notifications from "./Notifications"; // Remove if not used
import Header from "./Header/Header"; // Updated import path
import Login from "./Login/Login"; // Updated import path
import Footer from "./Footer/Footer"; // Updated import path
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* Notifications component - Remove if not used */}
        <Notifications />

        <div className="App">
          {/* Header component */}
          <Header />

          {/* Login component */}
          <Login />

          {/* Footer component */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  logOut: () => {}, // Default empty function for logOut prop
};

export default App;


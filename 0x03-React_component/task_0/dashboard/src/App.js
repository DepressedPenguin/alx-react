import React, { Component } from "react";
import Notifications from "./Notifications"; // Remove if not used
import Header from "./Header/Header"; // Updated import path
import Login from "./Login/Login"; // Updated import path
import Footer from "./Footer/Footer"; // Updated import path
import "./App.css";

class App extends Component {
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

export default App;

import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import Notifications from "./Notifications"; // Remove if not used
import Header from "./Header/Header"; // Updated import path
import Login from "./Login/Login"; // Updated import path
import Footer from "./Footer/Footer"; // Updated import path

const styles = StyleSheet.create({
  body: {
    // Add your body styling here
    // Example: backgroundColor: "#f0f0f0",
  },
  app: {
    // Add your app container styling here
  },
});

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

        <div className={css(styles.app, styles.body)}>
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


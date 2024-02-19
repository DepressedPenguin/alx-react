import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [enableSubmit, setenableSubmit] = useState(false);

  // FUNCTION FOR HANDLING EMAIL INPUT
  function handleChangeEmail(event) {
    setemail(event.target.value);
    // Check if both email and password are not empty to enable the submit button
    setenableSubmit(event.target.value !== "" && password !== "");
  }

  // FUNCTION FOR HANDLING PASSWORD INPUT
  function handleChangePassword(event) {
    setpassword(event.target.value);
    // Check if both email and password are not empty to enable the submit button
    setenableSubmit(email !== "" && event.target.value !== "");
  }

  return (
    <React.Fragment>
      <div className={css(styles["App-body"])}>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input
            className={css(styles.input)}
            type="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            className={css(styles.input)}
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          ></input>
          <input type="submit" value="OK" disabled={!enableSubmit} />
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
    },
  },

  input: {
    margin: "10px",
  },
});

export default Login;

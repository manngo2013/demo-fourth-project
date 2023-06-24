import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Login extends Component {
  state = { user: null, error: null };

  handleLogin = (event) => {
    event.preventDefault();
    try {
      let user = { username: "abc" };
      this.setState({ user });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    let { user, error } = this.state;

    return (
      <div style={{ marginLeft: 100 }}>
        {error && <p>{error.message}</p>}
        {user && <Navigate to="/dashboard" replace={true} />}
        <h1>Login Form</h1>
        <table cellPadding="5">
          <tr>
            <td>Username</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input type="password" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={(event) => this.handleLogin(event)}>
                Login
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

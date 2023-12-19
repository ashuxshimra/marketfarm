import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Farmer from "../Farmer/Farmer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }

  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };

  login = () => {
    // For now, just set the state to redirect
    this.setState({
      islogged: true
    });
  };

  render() {
    if (this.state.islogged) {
      return <Redirect to="/Farmer" />;
    }

    return (
      <div className="container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            // No authentication check for now, just call login()
            this.login();
          }}
          className="form-signin"
        >
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="row">
            <div className="col">
              <div className="form-group mr-sm-2">
                <input
                  id="FarmerID"
                  name="user_id"
                  type="text"
                  ref={(input) => { this.FarmerID = input }}
                  onChange={this.handleFormChange}
                  className="form-control"
                  placeholder="Farmer ID"
                  required
                />
              </div>
              <div className="form-group mr-sm-2">
                <input
                  id="FarmerID"
                  name="user_password"
                  type="password"
                  ref={(input) => { this.PhoneNo = input }}
                  onChange={this.handleFormChange}
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </form>
        <p>
          Don't have an Account..?<a href="/Register">Click here</a>
        </p>
      </div>
    );
  }
}

export default Login;

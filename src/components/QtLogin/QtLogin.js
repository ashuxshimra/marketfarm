import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class QtLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: "",
      },
    };
  }

  handleFormChange = (event) => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew,
    });
  };

  login = () => {
    localStorage.setItem("qtoken", "T");
    localStorage.setItem("qsession", this.state.loginParams.user_id);
    this.setState({
      islogged: true,
    });
  };

  render() {
    if (this.state.islogged) {
      return <Redirect to="/QTesting" />;
    }

    return (
      <div className="container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
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
                  onChange={this.handleFormChange}
                  className="form-control"
                  placeholder="name"
                  required
                />
              </div>
              <div className="form-group mr-sm-2">
                <input
                  id="FarmerID"
                  name="user_password"
                  type="password"
                  onChange={this.handleFormChange}
                  className="form-control"
                  placeholder="city"
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
          Don't have an Account..?<a href="/QtRegister">Click here</a>
        </p>
      </div>
    );
  }
}

export default QtLogin;

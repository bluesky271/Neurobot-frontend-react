import React from "react";

export class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
        <form className="form-signin">
          <h2 className="form-signin-heading">Already a member? Welcome back!</h2>
          <h5 className="form-signin-subheading">Enter your log in details below</h5>
          <h6 className="form-signin-subheading">Fields marked * are mandatory.</h6>
            <input className="form-control" placeholder="Email*"/>
            <input className="form-control" placeholder="Password*"/>
            <p>implement checkbox for remember me</p>
            <div></div>
            <button type="submit" className="btn btn-lg btn-primary btn-block">Login</button>
            <a href="#">Forgot password?</a>
        </form>
    );
  }
}

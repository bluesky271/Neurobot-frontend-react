import React from "react";

export class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      loginFormHeadingOne: "Join Neurobot",
      loginFormHeadingTwo: "Already a member? Welcome back!",
      loginFormSubHeadingOne: "Enter your log in details below",
      loginFormSubHeadingTwo: "Fields marked * are mandatory."
    };
  }

  render() {
    return (
        <form className="form-signin">
          <h2 className="form-signin-heading">{this.state.loginFormHeadingOne}</h2>
          <h2 className="form-signin-heading">{this.state.loginFormHeadingTwo}</h2>
          <h5 className="form-signin-subheading">{this.state.loginFormSubHeadingOne}</h5>
          <h6 className="form-signin-subheading">{this.state.loginFormSubHeadingTwo}</h6>
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

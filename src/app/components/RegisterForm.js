import React from "react";

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    render() {
        return (
            <form className="form-signin">
                <h2 className="form-signin-heading">Become a member. Welcome to NeuroBot!</h2>
                <h5 className="form-signin-subheading">Enter your email address below to get started.</h5>
                <h6 className="form-signin-subheading">Fields marked * are mandatory.</h6>
                    <input className="form-control" placeholder="First Name*"/>
                    <input className="form-control" placeholder="Last Name*"/>
                    <input className="form-control" placeholder="Email*"/>
                    <input className="form-control" placeholder="Password*"/>
                    <br></br>
                    <input className="form-control" placeholder="Confirm Password*"/>
                    <a onClick={this.handleClick}>Click to enter your address details.</a>
                    {this.state.isToggleOn ? "" :
                        <div>
                          <input className="form-control" placeholder="Telephone number"/>
                          <input className="form-control" placeholder="Company"/>
                          <input className="form-control" placeholder="United Kingdom"/>
                          <input className="form-control" placeholder="Please enter an address."/>
                          <input className="form-control" placeholder="Address1 (e.g. street number and street name)*"/>
                          <input className="form-control" placeholder="Address2 (optional)"/>
                          <input className="form-control" placeholder="City*"/>
                          <input className="form-control" placeholder="Postal code*"/>
                        </div>
                    }
                    <button type="submit" className="btn btn-lg btn-primary btn-block">Join Neurobot</button>
            </form>
        );
    }
}

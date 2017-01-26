import React from "react";

export class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: true,
          initialLink: "Click to enter your address details.",
          cancelLink: "Cancel."
        };

        this.handleClick = this.handleClick.bind(this);
    }

      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    render() {
        let link = null;
        if (this.state.isToggleOn) {link = this.state.initialLink;}
        else {link = this.state.cancelLink;}

        return (
            <form className="form-signin">
                <h2 className="form-signin-heading">Become a member. Welcome to NeuroBot!</h2>
                <h5 className="form-signin-subheading">Enter your email address below to get started.</h5>
                <h6 className="form-signin-subheading">Fields marked * are mandatory.</h6>
                <select id="title" className="form-control" required>
                  <option className="select-option" label="Title" value>Title</option>
                  <option className="select-option" label="Mrs" value="mrs">Mrs</option>
                  <option className="select-option" label="Miss" value="miss">Miss</option>
                  <option className="select-option" label="Ms" value="ms">Ms</option>
                  <option className="select-option" label="Mr" value="mr">Mr</option>
                </select>
                    <input className="form-control" placeholder="First Name*"/>
                    <input className="form-control" placeholder="Last Name*"/>
                    <input className="form-control" placeholder="Email*"/>
                    <input className="form-control" placeholder="Password*"/>
                    <br></br>
                    <input className="form-control" placeholder="Confirm Password*"/>
                    <a onClick={this.handleClick}>{link}</a>
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

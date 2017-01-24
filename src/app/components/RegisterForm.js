import React from "react";

export class RegisterForm extends React.Component {
    constructor() {
        super();
        this.state = {
        };
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
                    <a href="#">Click to enter your address details.</a>
                    <button type="submit" className="btn btn-lg btn-primary btn-block">Join Neurobot</button>
            </form>
        );
    }
}
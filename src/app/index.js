import React from "react";
import { render } from "react-dom";

import { LoginForm } from "./components/LoginForm"

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <LoginForm />
          </div>
        </div>
      </div>
    )
  }
}
render(<App/>, window.document.getElementById("app"));

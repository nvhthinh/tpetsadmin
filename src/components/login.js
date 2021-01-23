// create.component.js
import React, { Component } from 'react';

// import Pr2 from "../../lib/pic/pr2.jpg";


export default class Login extends Component {
    render() {
        return (
            <div className="container">
              <style dangerouslySetInnerHTML={{__html: "\n        .devfake {\n            display: none !important;\n        }\n    " }} />
              <style dangerouslySetInnerHTML={{__html: "\n        .bg_login {\n        background-color: #4e73df;\n        background-image: linear-gradient(180deg,#4e73df 10%,#224abe 100%);\n        background-size: cover;\n        }\n    " }} />
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome administrator page!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember
                              Me</label>
                          </div>
                        </div>
                        <a href="./" className="btn btn-primary btn-user btn-block">
                          Login
                        </a>
                        <hr />
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}
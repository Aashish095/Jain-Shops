import React from "react";
import "../Css/createaccount.css";

const CreateAccount= ()=> {
  return (
    <div className="container_h">
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <h3 id="form-title">REGISTER ACCOUNT</h3>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form method="POST" action="">
              <input type="hidden" name="csrfmiddlewaretoken" />
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="username"
                  className="form-control input_user"
                  placeholder="Username"
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-envelope-square"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  className="form-control input_user"
                  placeholder="Email"
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name="password1"
                  className="form-control input_pass"
                  placeholder="Password"
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name="password2"
                  className="form-control input_pass"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="d-flex justify-content-center mt-3 login_container">
                <button type="submit" name="button" className="btn login_btn">
                  Register Account
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Already have an account? <a href="/login" className="ml-2">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;


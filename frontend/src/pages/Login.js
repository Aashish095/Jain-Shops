import React from "react";
import '../Css/login.css'
const Login = () => {
  return (
    <div className="container_h">
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <h3 id="form-title">LOGIN</h3>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form method="POST" action="">
              {/* csrf_token */}
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username..."
                  className="form-control"
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
                  name="password"
                  placeholder="Password..."
                  className="form-control"
                />
              </div>
              <div className="d-flex justify-content-center mt-3 login_container">
                <input
                  className="btn login_btn"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
          {/* messages */}
          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Don't have an account?{" "}
              <a href="{% url 'register' %}" className="ml-2">
                Sign Up
              </a>
            </div>
            <div className="d-flex justify-content-center links">
              Forgot password?{" "}
              <a href="{% url 'reset_password' %}" className="ml-2">
                Reset password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import NavBarDashboard from "../components/NavBarDashboard";
import image from "../images/profile1.png";

const CreateCustomer = (props) => {
     const user = {
        id: 1,
        username: 'johndoe',
        is_staff: false,
    };
    return (
        <>
            <br/>
            <NavBarDashboard user={user}/><br/>
            <div className="row">
                <div className="col-md-3">
                    <div className="card card-body">
                        <hr/>
                        <h3 style={{textAlign: "center"}}>Create Account</h3>

                            <img className="profile-pic" src={image} />

                    </div>
                </div>
                  <div className="col-md-9">
                    <div className="card card-body">
                        <div className="d-flex">
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
                              Create Customer
                            </button>
                          </div>
                        </form>
                    </div>
                  </div>
                  </div>
            </div>
        </>
    );

}

export default CreateCustomer;
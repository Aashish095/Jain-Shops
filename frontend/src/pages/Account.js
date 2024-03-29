import React, { useState } from 'react';
import '../Css/account.css'
import NavBarDashboard from "../components/NavBarDashboard";
import {Link} from "react-scroll";
import image from "../images/profile1.png"

const Account = ()=> {
    const user = {
        id: 1,
        username: 'johndoe',
        is_staff: false,
    };
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState(image); // Assuming the default profile pic is 'profile1.png'
 const [profilePicUrl, setProfilePicUrl] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    // Do something with the form data, such as sending it  to a server
    console.log({ name, phone, email, profilePic });
  }

  function handleProfilePicChange(e) {

     const file = e.target.files[0];
        const fileUrl = URL.createObjectURL(file); // Create a URL for the selected file
    // Do something with the file, such as previewing it
    console.log(file);
    setProfilePic(file.name); // Update the state with the new profile pic file name
      setProfilePicUrl(fileUrl);
  }

  return (<>
            <br/>
          <NavBarDashboard user={user}/>
          <br/>
          <div className="account_div">
              <div className="row">
            <div className="col-md-3">
                <div className="card card-body">
                    <Link className="btn btn-warning" id="button_link" href="" to="/dashboard"> &#8592; Back to Profile</Link>
                    <hr/>
                    <h3 style={{textAlign: "center"}}>Account Settings</h3>
                    <hr/>
                    <img className="profile-pic" src={image} />

                </div>
            </div>


      <div className="col-md-9">
          <div className="card card-body">
              <form onSubmit={handleSubmit} className="form_css">
                  <div className="d-flex">
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
                              value={name}
                              onChange={e => setName(e.target.value)}
                            />
                          </div>
                  </div>
                  <div className="input-group mb-2">
                            <div className="input-group-append">
                              <span className="input-group-text">
                                    <i className="fa-solid fa-phone"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              name="phone"
                              className="form-control input_user"
                              placeholder="Phone"
                              id="phone" value={phone} onChange={e => setPhone(e.target.value)}
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
                  <div>

                      <span className="">Currently: {profilePicUrl?profilePicUrl:""}</span>&nbsp;
                       <input className="" type="checkbox" value="" id="" />    <br/>
                          <label className="" htmlFor="flexCheckChecked">
                              {profilePicUrl}
                          </label>
                    <input type="file" className="profile-pic" onChange={handleProfilePicChange} />
                  </div>

                   <div className="d-flex justify-content-center mt-3 login_container">
                       <button className="btn login_btn" type="submit">Submit</button>
                   </div>
              </form>
          </div>
      </div>
          </div>

          </div>

  </>


  );
}

export default Account;

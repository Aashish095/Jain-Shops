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
    // Do something with the form data, such as sending it to a server
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
      <div className="row">
            <div className="col-md-3">
                <div className="card card-body">
                    <Link className="btn btn-warning" href="" to="/dashboard"> &#8592; Back to Profile</Link>
                    <hr/>
                    <h3 style={{textAlign: "center"}}>Account Settings</h3>
                    <hr/>
                    <img className="profile-pic" src={image} />

                </div>
            </div>


      <div className="col-md-9">
          <div className="card card-body">
                  <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <span>Currently: {profilePicUrl?profilePicUrl:"Please add pic"}</span><br/>
            <input type="file" className="profile-pic" onChange={handleProfilePicChange} />
            <span>Selected file: {profilePicUrl}</span> {/* Display the selected file URL */}
            <button type="button" onClick={() => setProfilePic('')}>Clear</button>
               <div>
                   <button type="submit">Submit</button>
               </div>
            </form>
          </div>
      </div>
          </div>
  </>


  );
}

export default Account;

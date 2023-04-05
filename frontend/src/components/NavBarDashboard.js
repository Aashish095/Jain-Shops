import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../icon.png'
import '../Css/navbardashboard.css'
const NavBarDashboard = ({ user }) => {


  return (
      <section>
    <nav className="navbar navbar-expand-lg nv">
      <img className="im" src={icon} alt="icon" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav di">
          {user.is_staff ? (
            <>
              <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                  Dashboard⚔
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products🛍
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  Profile😎
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard🛒
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/create/${user.id}`}>
                  Create order🛍
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products🛍
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      <span className="hello-msg">Hello👋, {user.username}</span>
      <Link className="hello-msg" to="/">
        Logout
      </Link>
    </nav>
          </section>
  );
};

export default NavBarDashboard;

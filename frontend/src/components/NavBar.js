import React from 'react';
import '../Css/navbar.css'
import Logo from '../icon.png'
import { Link } from 'react-scroll';
const MyComponent = () => {

    return (
        <div>
            <header className="header">
                <nav className="nav">
                    <img src={Logo}
                        alt="shop logo"
                        className="nav__logo"
                        id="logo"
                        // designer="josan"
                        data-version-number="4.0"
                    />
                    <ul className="nav__links">
                        <li className="nav__item">

                            <Link className="Link__link" id="bar" to="section--1" smooth={true} duration={500} spy={true} exact='true' offset={-70}>Feature</Link>

                        </li>
                        <li className="nav__item">
                          <Link className="Link__link" id="bar" to="section--2" smooth={true} duration={500} spy={true} exact='true' offset={-70}>
                            Operations
                            </Link>
                        </li>
                        <li className="nav__item">
                                <Link className="Link__link" id="bar" to="section--3" smooth={true} duration={500} spy={true} exact='true' offset={-70}>
                            Testimonials
                                </Link>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link nav__link--btn" href="/create_account">Open account</a>
                        </li>
                        <li className="nav__item">
                            <a className="nav__link nav__link--btn" href="/login">Login</a>
                        </li>
                    </ul>


                </nav>
                </header>
        </div>
    );
};

export default MyComponent;

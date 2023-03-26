import React from 'react';
import prod1 from '../images/prod1.jpg'
import lazy_dl from '../images/d1-lazy.png'
import delivery from '../images/delivery.png'
import order_lazy from '../images/order-lazy.png'
import order from '../images/order.jpg'
import card_lazy from '../images/card-lazy.png'
import card from '../images/card.png'
import user1 from '../images/user-1.jpg'
import user2 from '../images/user-2.jpg'
import user3 from '../images/user-3.jpg'
import icon from '../images/card.png'
import { Link } from 'react-scroll';
import LazyLoad from 'react-lazyload';
import '../Css/main.css'
import Operations from "./Operations";
import SlideOperations from "./SlideOperations";
const Middle = (props) => (
    <>
    <header>
         <div className="header__title">

        <h1>
            Order
          <span className="highlight"> from</span>
          Jain's<br />
          <span className="highlight"> Shop</span>
        </h1>
        <h4>We can assured you to delivery product as soon as possible</h4>
           <Link
               className="learn_more" to="section--1" smooth={true} duration={500} spy={true} exact='true' offset={-70}
           >
             Learn more 👇
           </Link>

        <img
          src={prod1}
          className="header__img"
          alt="Minimalist bank items"
        />
      </div>
    </header>

   <section className="section" id="section--1">
      <div className="section__title">
        <h2 className="section__description">Features</h2>
        <h3 className="section__header">
          Everything you need in a Jain's mall and more.
        </h3>
      </div>

      <div className="features">
         <LazyLoad height={200} >
            <img
              src={lazy_dl}
              data-src={delivery}
              alt="delivery"
              className="features__img lazy-img"
                onLoad={(e) => e.target.classList.add('loaded')}
            />
         </LazyLoad>
        <div className="features__feature">
          <h5 className="features__header">100% Delivery record</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>

        <div className="features__feature">

          <h5 className="features__header">Watch your delivery status</h5>
          <p>
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
            inventore ab? Nulla incidunt eius numquam sequi iste pariatur
            quibusdam!
          </p>
        </div>
         <LazyLoad height={200} once>
        <img
          src={order_lazy}
          data-src={order}
          alt="Plant"
          className="features__img lazy-img"
           onLoad={(e) => e.target.classList.add('loaded')}
        />
         </LazyLoad>
         <LazyLoad height={200} once>
        <img
          src={card_lazy}
          data-src={card}
          alt="Credit card"
          className="features__img lazy-img"
           onLoad={(e) => e.target.classList.add('loaded')}
        />
         </LazyLoad>
        <div className="features__feature">
          <h5 className="features__header">Online payment not accepted</h5>
          <p>
            Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
            eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab.
          </p>
        </div>
      </div>
    </section>
    <section className="section" id="section--2">
      <div className="section__title">
        <h2 className="section__description">Operations</h2>
        <h3 className="section__header">
          Everything as simple as possible, but no simpler.
        </h3>
      </div>

      <div className="operations">
        <>
          <Operations/>
        </>

      </div>
    </section>

    <section className="section" id="section--3">
      <div className="section__title section__title--testimonials">
        <h2 className="section__description">Have you tried to order something?</h2>
        <h3 className="section__header">
          Millions of Customer are already making their lifes simpler.
        </h3>
      </div>
        <SlideOperations/>
    </section>
     <section className="section section--sign-up">
      <div className="section__title">
        <h3 className="section__header">
          The best day to join Jain's shop was one year ago. The second best is
          today!
        </h3>
      </div>
      <button className="btn "><a className="nav__link nav__link--btn" href="/create_account">Open your free account today!</a></button>
    </section>
    <footer className="footer">
        <img src={icon} alt="Logo" className="footer__logo" />
        <p className="footer__copyright">
        &copy; Copyright by
        <a
          className="footer__link twitter-link"
          target="_blank"
          href="frontend/src/components"
          > Aashish Jain</a
        >. Use for learning or your portfolio. Don't use to teach. Don't claim
        as your own product.
      </p>
    </footer>
    </>
);

export default Middle;
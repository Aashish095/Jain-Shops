import React, { useState } from 'react';

function Operations() {
  const [activeTab, setActiveTab] = useState(1);

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <div className="operations">
      <div className="operations__tab-container">
        <button
          className={`btn operations__tab operations__tab--1 ${activeTab === 1 ? 'operations__tab--active' : ''}`}
          onClick={() => handleTabClick(1)}
          data-tab="1"
        >
          <span>01</span>Pending
        </button>
        <button
          className={`btn operations__tab operations__tab--2 ${activeTab === 2 ? 'operations__tab--active' : ''}`}
          onClick={() => handleTabClick(2)}
          data-tab="2"
        >
          <span>02</span>Out for delivery
        </button>
        <button
          className={`btn operations__tab operations__tab--3 ${activeTab === 3 ? 'operations__tab--active' : ''}`}
          onClick={() => handleTabClick(3)}
          data-tab="3"
        >
          <span>03</span>Delivered
        </button>
      </div>
      <div className="operations__content-container">
        <div className={`operations__content operations__content--1 ${activeTab === 1 ? 'operations__content--active' : ''}`}>
          {/* Pending content */}
        </div>
        <div className={`operations__content operations__content--2 ${activeTab === 2 ? 'operations__content--active' : ''}`}>
          {/* Out for delivery content */}
        </div>
        <div className={`operations__content operations__content--3 ${activeTab === 3 ? 'operations__content--active' : ''}`}>
          {/* Delivered content */}
        </div>
      </div>
      <div className={`operations__content operations__content--1 ${activeTab===1 ? 'operations__content--active':''} `}>

        <div className="operations__icon operations__icon--1">
          {/*<svg>*/}
            {/*<use xlink:href="{% static 'images/icons.svg#icon-upload' %}"></use>*/}
          {/*</svg>*/}
        </div>
          <h5 className="operations__header">
            We first stay pending the product
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
      </div>
        <div className={`operations__content operations__content--2 ${activeTab===2? 'operations__content--active':''} `}>
          <div className="operations__icon operations__icon--2">
            {/*<svg>*/}
            {/*  <use xlink:href="{% static 'img/icons.svg#icon-home' %}"></use>*/}
            {/*</svg>*/}
          </div>
          <h5 className="operations__header">
            Then goes to the delivery period
          </h5>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className={`operations__content operations__content--3 ${activeTab===3 ? 'operations__content--active':''}`}>
          <div className="operations__icon operations__icon--3">
            {/*<svg>*/}
            {/*  <use xlink:href="{% static 'img/icons.svg#icon-user-x' %}"></use>*/}
            {/*</svg>*/}
          </div>
          <h5 className="operations__header">
            When customer received the order over work is all over.
          </h5>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
    </div>
  );
}

export default Operations;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import LogOut from './LogOut';
import './Navbar.css';
import menuIcon from '../Img/menu.png';
import facebookImg from '../Img/facebook.png';
import twitterImg from '../Img/twitter.png';
import googleplusImg from '../Img/googleplus.png';
import pinterestImg from '../Img/pinterest.png';
import vimeoImg from '../Img/vimeo.png';

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState(false);

  const menuLinks = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/reservation/new',
      text: 'Reservation Form',
    },
    {
      id: 3,
      path: '/reservations',
      text: 'Reservations',
    },
    {
      id: 4,
      path: '/newcar',
      text: 'Add Car',
    },
    {
      id: 5,
      path: '/deletecar',
      text: 'Remove Car',
    },
    {
      id: 6,
      path: '/logout',
      text: 'Log Out',
    },
  ];

  const menuBtnHandler = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <Nav className="d-flex flex-row d-md-flex flex-md-column navbar m-0 p-0 flex-nowrap shadow">
      <button
        className="d-md-none border-0 bg-transparent p-2 order-0"
        onClick={menuBtnHandler}
        type="button"
      >
        <img className="menuIcon" src={menuIcon} alt="icon" />
      </button>
      <p className="title mb-0 mt-4">JDE MOTORS</p>
      <div className="align-self-stretch w-100 ps-3 pt-3">
        <ul className={`${menuStatus ? 'show-menu-links' : 'hide-menu-links'} d-md-flex flex-md-column link-container m-0 ps-2`}>
          {
            menuLinks.map((link) => (
              link.id !== 6
                ? (
                  <li
                    className="nav-item"
                    key={link.id}
                  >
                    <NavLink
                      className="fs-5 nav-link px-3"
                      to={link.path}
                      activeclassname="active"
                      exact="true"
                      onClick={() => setMenuStatus('d-none')}
                    >
                      {link.text.toUpperCase()}
                    </NavLink>
                  </li>
                )
                : (
                  <li className="nav-item log-out py-2" key={link.id}>
                    <LogOut text={link.text.toUpperCase()} />
                  </li>
                )
            ))
          }
        </ul>
      </div>
      <div className="m-0 d-none d-md-block order-md-3">
        <div className="m-0 d-flex flex-row justify-content-around">
          <a href="/" target="_blank"><img className="nav-icons" alt="icon" src={twitterImg} /></a>
          <a href="/" target="_blank"><img className="nav-icons" alt="icon" src={facebookImg} /></a>
          <a href="/" target="_blank"><img className="nav-icons" alt="icon" src={googleplusImg} /></a>
          <a href="/" target="_blank"><img className="nav-icons" alt="icon" src={vimeoImg} /></a>
          <a href="/" target="_blank"><img className="nav-icons" alt="icon" src={pinterestImg} /></a>
        </div>
        <p className="m-0 d-none d-md-block text-muted">© 2021 Microverse & C.S.P.A</p>
      </div>
    </Nav>
  );
};

export default Navbar;

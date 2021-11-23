import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import menuIcon from '../Img/menu.png';
import facebookImg from '../Img/facebook.png';
import twitterImg from '../Img/twitter.png';
import googleplusImg from '../Img/googleplus.png';
import pinterestImg from '../Img/pinterest.png';
import vimeoImg from '../Img/vimeo.png';

const Navbar = () => {
  const [menuStatus, setMenuStatus] = useState('d-none');
  const menuLinks = [
    {
      id: 1,
      path: '/',
      text: 'Home'
    },
    {
      id: 2,
      path: '/newreservation',
      text: 'Reservation Form'
    },
    {
      id: 3,
      path: '/reservations',
      text: 'Reservations'
    },
    {
      id: 4,
      path: '/newcar',
      text: 'Add Car'
    },
    {
      id: 5,
      path: '/deletecar',
      text: 'Remove Car'
    },
    {
      id: 6,
      path: '/logout',
      text: 'Log Out'
    }
  ];

  const menuBtnHandler = () => {
    if (menuStatus === 'd-none') {
      setMenuStatus('d-block');
    } else {
      setMenuStatus('d-none');
    }
  };

  return (
    <Nav className="d-flex flex-row d-md-flex flex-md-column navbar m-0 p-0" >
      <button
        className="d-md-none border-0 bg-transparent p-2"
        onClick={menuBtnHandler}
      >
        <img className="menuIcon" src={menuIcon} />
      </button>
      <h1 className="title m-4">VESPA</h1>
      <div className="align-self-stretch flex-fill w-100 ps-3 pt-3">
        <ul className={menuStatus + " d-md-flex flex-md-column link-container"}>
          {
            menuLinks.map((link) => (
              link.id !== 6 ?
                (
                  <li
                    className="my-2 nav-item"
                    key={link.id}
                    onClick={() => setMenuStatus('d-none')}
                  >
                    <NavLink
                      className="fs-4 nav-link px-4"
                      to={link.path}
                      activeclassname="active"
                      exact="true"
                    >
                      {link.text.toUpperCase()}
                    </NavLink>
                  </li>
                )
                :
                (
                  <li className="my-2 nav-item log-out py-2" key={link.id}>
                    <button
                      type="button"
                      className="fs-4 px-4 border-0 bg-transparent"
                    >
                      {link.text.toUpperCase()}
                    </button>
                  </li>
                ) 
            ))
          }
        </ul>
      </div>
      <div className="d-none d-md-block">
        <div className="d-flex flex-row justify-content-around">
          <a href="#" target="_blank"><img className="nav-icons" src={twitterImg} /></a>
          <a href="#" target="_blank"><img className="nav-icons" src={facebookImg} /></a>
          <a href="#" target="_blank"><img className="nav-icons" src={googleplusImg} /></a>
          <a href="#" target="_blank"><img className="nav-icons" src={vimeoImg} /></a>
          <a href="#" target="_blank"><img className="nav-icons" src={pinterestImg} /></a>
        </div>
        <p className="d-none d-md-block text-muted">{'© 2021 Microverse & C.S.P.A'}</p>
      </div>
    </Nav>
  );
};

export default Navbar;
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { ImConnection } from 'react-icons/im';
import { BsFillChatLeftTextFill } from 'react-icons/bs';

import './BottomNavigation.style.css';

const Footer = () => (
  <footer className="bottom-navigation">
    <NavLink to="/dashboard/profile" className="icon-navigation" disabled>
      <FaUserAlt />
      <p>Profile</p>
    </NavLink>
    <NavLink to="/dashboard/find-match" className="icon-navigation">
      <ImConnection />
      <p>Connect</p>
    </NavLink>
    <NavLink to="/dashboard/chat" className="icon-navigation">
      <BsFillChatLeftTextFill />
      <p>Chat</p>
    </NavLink>
  </footer>
);

const BottomNavigation = () => {
  const location = useLocation();
  const isInDashboard = /^\/dashboard/.test(location.pathname);

  return isInDashboard ? <Footer /> : <></>;
};

export default BottomNavigation;

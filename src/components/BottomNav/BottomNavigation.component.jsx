import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { ImConnection } from 'react-icons/im';
import { BsFillChatLeftTextFill } from 'react-icons/bs';

import './BottomNavigation.style.css';

const BottomNavigation = () => (
  (
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
  )
);

export default BottomNavigation;

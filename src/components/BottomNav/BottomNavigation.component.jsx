import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { ImConnection } from 'react-icons/im';
import { BsFillChatLeftTextFill } from 'react-icons/bs';

const BottomNavigation = () => (
  (
    <footer className="bottom-navigation">
      <div className="icon-navigation">
        <FaUserAlt />
        <p>Profile</p>
      </div>
      <div className="icon-navigation">
        <ImConnection />
        <p>Connect</p>
      </div>
      <div className="icon-navigation">
        <BsFillChatLeftTextFill />
        <p>Chat</p>
      </div>
    </footer>
  )
);

export default BottomNavigation;

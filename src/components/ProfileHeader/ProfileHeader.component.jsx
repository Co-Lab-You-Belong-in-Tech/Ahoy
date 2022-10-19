import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';

const ProfileHeader = (props) => {
  const { changePage } = props;
  const { disabled } = props;
  return (
    <header>
      <div className="back-btn-container">
        <button type="button" className="back-btn" onClick={() => changePage(-1)}>
          <IoIosArrowBack />
        </button>
      </div>
      <button disabled={disabled} type="button" className="skip-btn" onClick={() => changePage(1)}>skip</button>
    </header>
  );
};

ProfileHeader.propTypes = {
  changePage: PropTypes.func,
  disabled: PropTypes.string,
};

export default ProfileHeader;

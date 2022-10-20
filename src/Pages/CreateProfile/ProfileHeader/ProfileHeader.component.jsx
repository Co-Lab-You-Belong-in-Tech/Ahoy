import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';

const ProfileHeader = ({ goToNextPage, pageNumber }) => (
  (
    <header>
      <div className="back-btn-container">
        <button type="button" className={pageNumber === 0 ? 'back-btn disable' : 'back-btn'} onClick={() => goToNextPage(-1)}>
          <IoIosArrowBack />
        </button>
      </div>
      <button type="button" className={pageNumber === 1 ? 'skip-btn disable' : 'skip-btn'} onClick={() => goToNextPage(1)}>skip</button>
    </header>
  )
);

ProfileHeader.propTypes = {
  goToNextPage: PropTypes.func,
  pageNumber: PropTypes.number,
};

export default ProfileHeader;

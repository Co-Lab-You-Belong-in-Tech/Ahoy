import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack } from 'react-icons/io';

const ProfileHeader = ({ goToNextPage, goToPreviousPage, pageNumber }) => (
  (
    <header>
      <div className="back-btn-container">
        <button type="button" className={pageNumber === 0 ? 'back-btn disable' : 'back-btn'} onClick={() => goToPreviousPage()}>
          <IoIosArrowBack />
        </button>
      </div>
      <button type="button" className={pageNumber === 2 ? 'skip-btn disable' : 'skip-btn'} onClick={() => goToNextPage()}>skip</button>
    </header>
  )
);

ProfileHeader.propTypes = {
  goToNextPage: PropTypes.func,
  goToPreviousPage: PropTypes.func,
  pageNumber: PropTypes.number,
};

export default ProfileHeader;

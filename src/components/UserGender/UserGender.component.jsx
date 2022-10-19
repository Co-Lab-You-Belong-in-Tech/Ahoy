import React from 'react';
import PropTypes from 'prop-types';
import ProfileHeader from '../ProfileHeader/ProfileHeader.component';

const UserGender = (props) => {
  const { pageNumber } = props;
  const { changePage } = props;

  return (
    <>
      <ProfileHeader pageNumber={pageNumber} changePage={changePage} />
      <div className="v-spacer" />
      <h2>I am a</h2>
      <div className="v-spacer" />
      <div className="gender-container">
        <label htmlFor="Woman" className="gender-label">
          Woman
          <input type="radio" id="Woman" name="gender" value="Woman" className="gender-input" />
        </label>
        <div className="v-spacer" />
        <label htmlFor="Man" className="gender-label">
          Man
          <input type="radio" id="Man" name="gender" value="Man" className="gender-input" />
        </label>
        <div className="v-spacer" />
        <label htmlFor="Choose another" className="gender-label">
          Choose another
          <input type="radio" id="Choose another" name="gender" value="Choose another" className="gender-input" />
        </label>
      </div>
      <div className="v-spacer" />
      <button type="button" className="btn" onClick={() => changePage(1)}>Save</button>
    </>
  );
};

UserGender.propTypes = {
  pageNumber: PropTypes.number,
  changePage: PropTypes.func,
};

export default UserGender;

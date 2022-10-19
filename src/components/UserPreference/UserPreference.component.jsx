import React from 'react';
import PropTypes from 'prop-types';
import ProfileHeader from '../ProfileHeader/ProfileHeader.component';

const UserPreference = (props) => {
  const { pageNumber } = props;
  const { changePage } = props;
  return (
    <>
      <ProfileHeader pageNumber={pageNumber} changePage={changePage} />
      <div className="v-spacer" />
      <h2>I&apos;m interested in meeting</h2>
      <div className="preference-container">
        <label htmlFor="Woman" className="preference-label">
          Women
          <input type="checkbox" id="Woman" name="preference" value="Woman" className="preference-input" />
        </label>
        <div className="v-spacer" />
        <label htmlFor="Man" className="preference-label">
          Men
          <input type="checkbox" id="Man" name="preference" value="Man" className="preference-input" />
        </label>
        <div className="v-spacer" />
        <label htmlFor="Another" className="preference-label">
          Choose another
          <input type="checkbox" id="Another" name="preference" value="Another" className="preference-input" />
        </label>
        <div className="v-spacer" />
        <label htmlFor="All Genders" className="preference-label">
          I would like to meet all genders
          <input type="checkbox" id="All Genders" name="preference" value="All Genders" className="preference-input" />
        </label>
      </div>
      <div className="v-spacer" />
      <button type="button" className="btn" onClick={() => changePage(1)}>Save</button>
    </>
  );
};

UserPreference.propTypes = {
  pageNumber: PropTypes.number,
  changePage: PropTypes.func,
};

export default UserPreference;

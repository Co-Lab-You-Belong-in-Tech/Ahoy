import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = (props) => {
  const { changePage } = props;
  return (
    <>
      <div className="v-spacer" />
      <h2>Profile details</h2>
      <div className="v-spacer" />
      <input type="text" placeholder="Name" className="input" required />
      <input type="date" className="input" required />
      <div className="v-spacer" />
      <button type="button" className="btn" onClick={() => changePage(1)}>Save</button>
    </>
  );
};

UserDetails.propTypes = {
  changePage: PropTypes.func,
};

export default UserDetails;

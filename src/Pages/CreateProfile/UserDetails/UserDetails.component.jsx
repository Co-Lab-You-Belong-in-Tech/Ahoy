import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ goToNextPage }) => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  return (
    <form>
      <div className="v-spacer" />
      <h2>Profile details</h2>
      <div className="v-spacer" />
      <input type="text" placeholder="Name" className="input" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea className="bio" value={bio} placeholder="A bit about you..." onChange={(e) => setBio(e.target.value)} />
      <div className="v-spacer" />
      <button type="button" className="btn" onClick={() => goToNextPage(1)}>Save</button>
    </form>
  );
};

UserDetails.propTypes = {
  goToNextPage: PropTypes.func,
};

export default UserDetails;

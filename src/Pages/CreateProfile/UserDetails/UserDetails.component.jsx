import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const UserDetails = ({ saveData }) => {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    setName(user.name);
    setBio(user.bio);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData({ name, bio });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="v-spacer" />
      <h2>Profile details</h2>
      <div className="v-spacer" />
      <input
        type="text"
        placeholder="Name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        className="bio"
        value={bio}
        placeholder="A bit about you..."
        onChange={(e) => setBio(e.target.value)}
      />
      <div className="v-spacer" />
      <input type="submit" className="btn" value="Save" />
    </form>
  );
};

export default UserDetails;

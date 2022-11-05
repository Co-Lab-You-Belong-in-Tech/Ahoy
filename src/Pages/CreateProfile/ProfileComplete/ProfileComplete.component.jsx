import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileComplete = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate('/dashboard'), 2000);
  }, []);

  return (
    <div className="profile-complete">
      <h2>Congratulations User</h2>
      <div className="v-spacer" />
      <p className="center">
        <strong>Your account is ready to use.</strong>
      </p>
      <div className="v-spacer" />
      <p className="center">
        Start discovering
        <strong> new friends </strong>
        nearby in just a few seconds.
      </p>
    </div>
  );
};

export default ProfileComplete;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserImage = ({ goToNextPage }) => {
  const [profileImg, setProfileImg] = useState();
  const onImageChange = (e) => {
    const [file] = e.target.files[0];
    setProfileImg(URL.createObjectURL(file));
  };

  const processForm = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={processForm}>
      <div className="v-spacer" />
      <h2>Add photo</h2>
      <p className="center">Adding high quality photo can result in higher amount of matches.</p>
      <img id="output" src={profileImg} className="image-output" alt="" />
      <input src={profileImg} type="file" onChange={() => onImageChange} />
      <div className="v-spacer" />
      <p className="center">You can edit/add more photos later.</p>
      <div className="v-spacer" />
      <button type="submit" className="btn" onClick={() => goToNextPage(1)}>Save</button>
    </form>
  );
};

UserImage.propTypes = {
  goToNextPage: PropTypes.func,
};

export default UserImage;

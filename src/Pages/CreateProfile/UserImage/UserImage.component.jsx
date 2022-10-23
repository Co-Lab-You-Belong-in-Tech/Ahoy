import React, { useState } from 'react';

const UserImage = ({ saveData }) => {
  const [profileImg, setProfileImg] = useState();
  const onImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImg(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveData({ photo: profileImg });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="v-spacer" />
      <h2>Add photo</h2>
      <p className="center">Adding high quality photo can result in higher amount of matches.</p>
      <div style={{ backgroundImage: `url("${profileImg}")` }} className="create-page-image-preview" />
      <input type="file" onChange={(e) => onImageChange(e)} />
      <div className="v-spacer" />
      <p className="center">You can edit/add more photos later.</p>
      <div className="v-spacer" />
      <input type="submit" className="btn" value="Save" />
    </form>
  );
};

export default UserImage;

import React from 'react';
import PropTypes from 'prop-types';
import ProfileHeader from '../ProfileHeader/ProfileHeader.component';

const UserImage = (props) => {
  const { pageNumber } = props;
  const { changePage } = props;
  const { selectedFile } = props;
  const { setSelectedFile } = props;

  return (
    <>
      <ProfileHeader pageNumber={pageNumber} changePage={changePage} />
      <div className="v-spacer" />
      <h2>Add photo</h2>
      <p className="center">Adding high quality photo can result in higher amount of matches.</p>
      <div className="v-spacer" />
      <input type="file" value={selectedFile} onChange={(e) => setSelectedFile(e.target.files[0])} />
      <div className="v-spacer" />
      <p className="center">You can edit/ add more photos later.</p>
      <div className="v-spacer" />
      <button type="button" className="btn" onClick={() => changePage(1)}>Save</button>
    </>
  );
};

UserImage.propTypes = {
  pageNumber: PropTypes.number,
  changePage: PropTypes.func,
  selectedFile: PropTypes.string,
  setSelectedFile: PropTypes.func,
};

export default UserImage;

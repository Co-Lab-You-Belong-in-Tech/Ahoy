import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { updateAsync } from '../../features/user/userSlice';
import ProfileHeader from './ProfileHeader/ProfileHeader.component';
import UserDetails from './UserDetails/UserDetails.component';
import UserImage from './UserImage/UserImage.component';
import ProfileComplete from './ProfileComplete/ProfileComplete.component';

const CreateProfile = () => {
  const user = useSelector((state) => state.user);

  const [pageNumber, setPageNumber] = useState(0);
  const goToNextPage = () => {
    setPageNumber(() => pageNumber + 1);
  };
  const goToPreviousPage = () => {
    setPageNumber(() => pageNumber - 1);
  };

  const dispatch = useDispatch();
  const saveData = (data) => {
    const { token } = user;
    dispatch(updateAsync({ data, token }))
      .unwrap()
      .then(() => {
        goToNextPage();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="create-profile-page">
      <ProfileHeader
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        pageNumber={pageNumber}
      />
      <main>
        {pageNumber === 0 && <UserDetails saveData={saveData} />}
        {pageNumber === 1 && <UserImage saveData={saveData} />}
        {pageNumber === 2 && <ProfileComplete />}
      </main>
    </section>
  );
};

export default CreateProfile;

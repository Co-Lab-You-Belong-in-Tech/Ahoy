import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader.component';
import UserDetails from './UserDetails/UserDetails.component';
import UserImage from './UserImage/UserImage.component';
import ProfileComplete from './ProfileComplete/ProfileComplete.component';

const CreateProfile = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const goToNextPage = () => {
    setPageNumber(() => pageNumber + 1);
  };
  const goToPreviousPage = () => {
    setPageNumber(() => pageNumber - 1);
  };

  return (
    <section className="create-profile-page">
      <ProfileHeader
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        pageNumber={pageNumber}
      />
      <main>
        {pageNumber === 0 && <UserDetails goToNextPage={goToNextPage} />}
        {pageNumber === 1 && (
          <UserImage
            pageNumber={pageNumber}
            goToNextPage={goToNextPage}
          />
        )}
        {pageNumber === 2 && <ProfileComplete />}
      </main>
    </section>
  );
};

export default CreateProfile;

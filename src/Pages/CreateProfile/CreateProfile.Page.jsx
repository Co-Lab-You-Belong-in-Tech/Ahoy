import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader/ProfileHeader.component';
import UserDetails from './UserDetails/UserDetails.component';
import UserImage from './UserImage/UserImage.component';
import ProfileComplete from './ProfileComplete/ProfileComplete.component';

const CreateProfile = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const goToNextPage = (value) => {
    (
      setPageNumber((pageNumber) => pageNumber + value)
    );
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(data);
  // };

  // const tabs = [<UserDetails pageNumber={pageNumber} goToNextPage={goToNextPage} key={1} />,
  //   <UserGender pageNumber={pageNumber} goToNextPage={goToNextPage} key={2} />,
  //   <UserImage
  //     key={3}
  //     pageNumber={pageNumber}
  //     goToNextPage={goToNextPage}
  //     selectedFile={selectedFile}
  //     setSelectedFile={setSelectedFile}
  //   />,
  //   <ProfileComplete key={4} />,
  // ];

  return (
    <section className="create-profile-page">
      <ProfileHeader goToNextPage={goToNextPage} pageNumber={pageNumber} />
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

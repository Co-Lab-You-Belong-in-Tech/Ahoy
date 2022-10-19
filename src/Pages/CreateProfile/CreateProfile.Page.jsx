import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import UserDetails from '../../components/UserDetails/UserDetails.component';
import UserGender from '../../components/UserGender/UserGender.component';
import UserPreference from '../../components/UserPreference/UserPreference.component';
import UserImage from '../../components/UserImage/UserImage.component';
import UserInterests from '../../components/UserInterests/UserInterests.component';

const CreateProfile = () => {
  const [pageNumber, setPageNumber] = useState(0);
  // For file upload
  const [selectedFile, setSelectedFile] = useState('');
  const changePage = (value) => {
    (
      setPageNumber((pageNumber) => pageNumber + value)
    );
  };

  return (
    <section className="create-profile-page">
      {pageNumber < 1
        && (
          <header>
            <div className="back-btn-container">
              <Link to="/register" className="back-btn">
                <IoIosArrowBack />
              </Link>
            </div>
            <button type="button" className="skip-btn" onClick={() => changePage(1)}>skip</button>
          </header>
        ) }
      <main>
        <form action="submit">
          {pageNumber < 1 && <UserDetails pageNumber={pageNumber} changePage={changePage} />}
          {pageNumber === 1
            ? <UserGender pageNumber={pageNumber} changePage={changePage} /> : <></>}
          {pageNumber === 2
            ? <UserPreference pageNumber={pageNumber} changePage={changePage} /> : <></>}
          {pageNumber === 3
            ? (
              <UserImage
                pageNumber={pageNumber}
                changePage={changePage}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            ) : <></> }
          {pageNumber === 4
            ? (
              <UserInterests
                pageNumber={pageNumber}
                changePage={changePage}
              />
            ) : <></> }
        </form>
      </main>
    </section>
  );
};

export default CreateProfile;

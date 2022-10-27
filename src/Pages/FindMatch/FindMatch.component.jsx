import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import BottomNavigation from '../../components/BottomNav/BottomNavigation.component';
import SearchingForMatch from './SearchingForMatch/SearchingForMatch.component';
import MatchFound from './MatchFound/MatchFound.component';

const FindMatch = () => {
  const [page, goToNextPage] = useState(0);

  const setPage = () => {
    goToNextPage((prev) => prev + 1);
  };

  const goLive = () => {
    // make a request for location permission
    const access = true;
    // User grants permission
    if (access) {
      setPage();
    }
    // user doesn't grant permission
  };

  return (
    <>
      <div className="matches-form">
        {page === 0 && (
          <div className="matches-main">
            <button type="button" onClick={goLive} className="spark-btn">
              <img src={Logo} alt="" className="matches-logo" />
            </button>
            <p className="matches-notification">
              Tap to
              <strong>
                &nbsp; find friends &nbsp;
              </strong>
              nearby
            </p>
          </div>
        ) }
        {page === 1 && <SearchingForMatch setPage={setPage} />}
        {page === 2 && <MatchFound />}
        <BottomNavigation />
      </div>
    </>
  );
};

export default FindMatch;

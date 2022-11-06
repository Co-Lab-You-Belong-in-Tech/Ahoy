import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import BottomNavigation from '../../components/BottomNav/BottomNavigation.component';
import SearchingForMatch from './SearchingForMatch/SearchingForMatch.component';
import MatchFound from './MatchFound/MatchFound.component';

// Tabs stats:
//  - 'IDLE',
//  - 'FINDING',
//  - 'FOUND',

const FindMatch = () => {
  const [currentTab, setCurrentTab] = useState('IDLE');

  const setPage = (page = 'IDLE') => {
    setCurrentTab(page);
  };
  return (
    <>
      {currentTab === 'IDLE' && <IdlePage setPage={setPage} />}
      {currentTab === 'FINDING' && <SearchingForMatch setPage={setPage} />}
      {currentTab === 'FOUND' && <MatchFound setPage={setPage} />}

      <BottomNavigation />
    </>
  );
};

const IdlePage = ({ setPage }) => (
  <div className="matches-form">
    <div className="matches-main">
      <button type="button" onClick={() => setPage('FINDING')} className="spark-btn">
        <img src={Logo} alt="" className="matches-logo" />
      </button>
      <p className="matches-notification">
        Tap to&nbsp;
        <strong>
          find friends
        </strong>
        &nbsp;nearby
      </p>
    </div>
  </div>
);

export default FindMatch;

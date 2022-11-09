import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { callForMatchAsync } from '../../../features/match/matchSlice';

import logo from '../../../assets/logo.svg';

const SearchingForMatch = ({ setPage }) => {
  const match = useSelector((state) => state.match);
  const { token } = useSelector((state) => state.user);

  const [attemptCount, setAttemptCount] = useState(0);

  const dispatch = useDispatch();

  const callForMatch = () => {
    if (match.status !== 'MATCHED') {
      dispatch(callForMatchAsync({ token, location: {} }));
      setAttemptCount(attemptCount + 1);
    }
  };

  useEffect(() => {
    const breakTime = 5 * 60 * 1000; // 5 minutes
    const goToIdlePageAfterSomeTime = setTimeout(() => {
      toast.info('No match at the moment. Try again after some time');
      setPage('IDLE');
    }, breakTime);

    return () => {
      clearTimeout(goToIdlePageAfterSomeTime);
    };
  }, []);

  useEffect(() => {
    if (attemptCount) {
      setTimeout(() => {
        if (match.status !== 'MATCHED') {
          callForMatch();
        }
      }, 10 * 1000);
    } else {
      callForMatch();
    }
  }, [attemptCount]);

  useEffect(() => {
    // Here we need to check if we have match but it is old, we could call
    // reset reducer and force new calls here
    if (match.status === 'MATCHED') {
      setPage('FOUND');
    }
  }, [match]);

  return (
    <div className="searching-section">
      <div className="concentric-circles">
        <img src={logo} alt="" />
      </div>
      <p>Finding...</p>
    </div>
  );
};

SearchingForMatch.propTypes = {
  setPage: PropTypes.func,
};

export default SearchingForMatch;

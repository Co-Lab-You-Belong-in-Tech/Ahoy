import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import logo from '../../../assets/logo.svg';

const SearchingForMatch = ({ setPage }) => {
  const [match, setMatch] = useState({
    status: false,
  });
  const [attemptCount, setAttemptCount] = useState(0);

  const callForMatch = () => {
    setAttemptCount(attemptCount + 1);
    const callForMatchAsync = async () => {
      const newMatch = Math.random() > 0.8 ? 'matched' : '';
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(newMatch);
        }, 2000);
      });
    };

    if (match.status === false) {
      callForMatchAsync().then((newMatch) => {
        if (newMatch) {
          setMatch({
            ...match,
            status: true,
          });
        }
      });
    }
  };

  useEffect(() => {
    callForMatch();
    // Go back to idle page after certain time
    const breakTime = 5 * 60 * 1000; // 5 minutes
    const goToIdlePageAfterSomeTime = setTimeout(() => {
      toast.info('No match at the moment. Try again after some time');
      setPage('IDLE');
    }, breakTime);

    return () => {
      clearTimeout(goToIdlePageAfterSomeTime);
    };
  }, []);

  // Go to found page if there is a valid match
  useEffect(() => {
    if (match.status) setPage('FOUND');
  }, [match]);

  useEffect(() => {
    setTimeout(() => {
      if (match.status === false) {
        callForMatch();
      }
    }, 2000);
  }, [attemptCount]);

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

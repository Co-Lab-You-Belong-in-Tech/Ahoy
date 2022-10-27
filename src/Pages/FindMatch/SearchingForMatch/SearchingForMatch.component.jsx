import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/logo.svg';

const SearchingForMatch = ({ setPage }) => {
  const successfulMatch = () => {
    const matched = true;
    if (matched) {
      setTimeout(() => {
        setPage();
      }, 3000);
    }
  };

  useEffect(() => {
    successfulMatch();

    return () => {
      clearInterval(successfulMatch);
    };
  }, []);
  return (
    <div className="searching-section">
      <div className="concentric-circles">
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

SearchingForMatch.propTypes = {
  setPage: PropTypes.func,
};

export default SearchingForMatch;

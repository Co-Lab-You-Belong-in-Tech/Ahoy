import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MatchFound = ({ setPage }) => {
  const { name } = useSelector((state) => state.user);

  const navigate = useNavigate();

  return (
    <section className="matching-complete">
      <div className="matching-complete-header">
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="" className="profile-image-one" />
        </div>
        <div className="image-container">
          <img src="https://images.unsplash.com/photo-1589696484858-e17c285b387d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="profile-image-two" />
        </div>
      </div>
      <div className="matching-complete-body">
        <p className="matching-complete-title">
          It&apos;s a match
          {' '}
          {name}
          .
        </p>
        <p>Start a conversation now with each other.</p>
      </div>
      <div className="profile-footer">
        <button className="btn connect-btn" onClick={() => navigate('/dashboard/chat')} type="button">Connect Now</button>
        <button type="button" className="other-profiles" onClick={() => setPage('IDLE')}>Check other matches</button>
      </div>
    </section>
  );
};

export default MatchFound;

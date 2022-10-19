import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineCamera } from 'react-icons/ai';
import { BiShoppingBag, BiMicrophone } from 'react-icons/bi';
import { GrYoga } from 'react-icons/gr';
import { GiRiceCooker, GiPaintBrush, GiMountainCave } from 'react-icons/gi';
import { IoIosBook } from 'react-icons/io';
import { FaRunning } from 'react-icons/fa';
import { TbSwimming } from 'react-icons/tb';
import ProfileHeader from '../ProfileHeader/ProfileHeader.component';

const UserInterests = (props) => {
  const { pageNumber } = props;
  const { changePage } = props;
  return (
    <>
      <ProfileHeader pageNumber={pageNumber} changePage={changePage} />
      <div className="v-spacer" />
      <h2>Add interests</h2>
      <p className="center">Select few interests to let others know you better.</p>
      <div className="v-spacer" />
      <div className="interests-container">
        <label htmlFor="photography" className="interests-label">
          <AiOutlineCamera />
          Photography
          <input type="checkbox" id="photography" name="interests" value="photography" className="interest-input" />
        </label>
        <label htmlFor="Fashion" className="interests-label">
          <BiShoppingBag />
          Fashion
          <input type="checkbox" id="Fashion" name="interests" value="Fashion" className="interest-input" />
        </label>
        <label htmlFor="karaoke" className="interests-label">
          <BiMicrophone />
          Karaoke
          <input type="checkbox" id="Karaoke" name="interests" value="karaoke" className="interest-input" />
        </label>
        <label htmlFor="Yoga" className="interests-label">
          <GrYoga />
          Yoga
          <input type="checkbox" id="Yoga" name="interests" value="Yoga" className="interest-input" />
        </label>
        <label htmlFor="Cooking" className="interests-label">
          <GiRiceCooker />
          Cooking
          <input type="checkbox" id="Cooking" name="interests" value="Cooking" className="interest-input" />
        </label>
        <label htmlFor="Books" className="interests-label">
          <IoIosBook />
          Books
          <input type="checkbox" id="Books" name="interests" value="Books" className="interest-input" />
        </label>
        <label htmlFor="Running" className="interests-label">
          <FaRunning />
          Running
          <input type="checkbox" id="Running" name="interests" value="Running" className="interest-input" />
        </label>
        <label htmlFor="Books" className="interests-label">
          <TbSwimming />
          Swimming
          <input type="checkbox" id="Swimming" name="interests" value="Swimming" className="interest-input" />
        </label>
        <label htmlFor="Art" className="interests-label">
          <GiPaintBrush />
          Swimming
          <input type="checkbox" id="Art" name="interests" value="Art" className="interest-input" />
        </label>
        <label htmlFor="Traveling" className="interests-label">
          <GiMountainCave />
          Traveling
          <input type="checkbox" id="Traveling" name="interests" value="Traveling" className="interest-input" />
        </label>
      </div>
      <div className="v-spacer" />
      <p className="center">You can edit/ add more interests later.</p>
      {/* Please note this should be a submit button but I
      changed its type to button just to show the functionality and thats
      why i didn't fix the css */}
      <button type="button" className="btn">
        <Link to="/profile-complete">Save</Link>
      </button>
    </>
  );
};

UserInterests.propTypes = {
  pageNumber: PropTypes.number,
  changePage: PropTypes.func,
};

export default UserInterests;

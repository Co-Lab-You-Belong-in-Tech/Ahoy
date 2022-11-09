import React from 'react';

const ToggleSwitch = () => (
  (
    <label className="switch" htmlFor="switch-btn">
      <input type="checkbox" name="switch-btn" />
      <span className="slider round" />
    </label>
  )
);

export default ToggleSwitch;

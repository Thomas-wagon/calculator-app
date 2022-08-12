import React from "react";

const Header = ({ changeThemeFct }) => {
  function changeTheme(event) {
    changeThemeFct(event.target.value);
  }
  return (
    <div className="header">
      <h2>calc</h2>
      <div className="theme-selector">
        <p>THEME</p>
        <div className="radio-container">
          <div className="themes">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <input
            type="range"
            min="0"
            max="2"
            id="selector"
            onChange={changeTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

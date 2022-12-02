import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

function Header({ handleClickEvent, children = 'Default' }) {
  // anything

  return (
    <>
      <h1 onClick={handleClickEvent}>Header</h1>
      <p className="paragraph">some sentence</p>
      <h2>{children}</h2>
    </>
  );
}

Header.propTypes = {
  children: PropTypes.element,
};

// props = short for properties { title: 'Header' }
export default Header;

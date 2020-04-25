import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Novel Coronavirus Tracker</h1>
        <p className="lead">
          This is a simple tracker app to track the Covid-19 status in the
          Indian subcontinent.
        </p>
      </div>
    </div>
  );
};

export default Header;

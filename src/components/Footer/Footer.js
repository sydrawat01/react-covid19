import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = props => {
  return (
    <div className="footer">
      <nav className="navbar fixed-bottom bg-secondary">
        <span className="footnote">
          <p className="disclaimer">
            &copy; 2020 Siddharth Rawat. All rights reserved
          </p>
        </span>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a href="https://www.instagram.com/sydrawat" className="nav-link">
              <FontAwesomeIcon className="icons" icon={['fab', 'instagram']} />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/sydrawat" className="nav-link">
              <FontAwesomeIcon className="icons" icon={['fab', 'github-alt']} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;

import React from 'react';
import Link from 'gatsby-link';
import FloatWords from '../FloatWords/FloatWords';

import './HomePage.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="names">
      <h1>
        <span className="initials">M</span>
        <span>i</span>
        <span>c</span>
        <span>h</span>
        <span>a</span>
        <span>l</span> <span className="initials">Z</span>
        <span>a</span>
        <span>d</span>
        <span>a</span>
        <span>r</span>
        <span>n</span>
        <span>o</span>
        <span>w</span>
        <span>s</span>
        <span>k</span>
        <span>i</span>
      </h1>
      <h3>
        <span>Front End</span> /<span> Web Apps</span> / <span>Javascript Developer</span>
      </h3>
      <p className="wip">Website still under development</p>
    </div>
    <div className="links">
      <div className="row1">
        <Link to="/projects" className="linkBox">
          <div>Projects</div>
        </Link>

        <Link to="/about" className="linkBox">
          <div>About Me</div>
        </Link>
      </div>
      <div className="row2">
        <Link to="/CV" className="linkBox">
          <div>Have a look at my CV</div>
        </Link>

        <Link to="/contact" className="linkBox">
          <div>Contact</div>
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;

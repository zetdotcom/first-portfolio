import React from 'react';
import Link from 'gatsby-link';
import FloatWords from '../FloatWords/FloatWords';

import './HomePage.scss';

const HomePage = () => (
  <div className="homepage" id="home">
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
        <span>Front End</span> / React / <span>Javascript Developer</span>
      </h3>
    </div>
    {/*}
    <div className="links">
      <div className="row1">
        <Link to="/projects/" className="linkBox">
          <div>Projects</div>
        </Link>

        <a href="/about/" className="linkBox">
          <div>About Me</div>
        </a>
      </div>
      <div className="row2">
        <a href="/CVMZFrontEnd.pdf" className="linkBox">
          <div>Have a look at my CV</div>
        </a>

        <a href="/contact/" className="linkBox">
          <div>Contact</div>
        </a>
      </div>
    </div>
*/}
  </div>
);

export default HomePage;

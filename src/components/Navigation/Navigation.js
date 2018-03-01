import React from 'react';
import Link from 'gatsby-link';
import { GoHome, GoKey, GoMicroscope, GoPerson, GoPlug, GoFileBinary, GoChecklist, GoMail } from 'react-icons/lib/go/';

import './Navigation.scss';

const Navigation = () => (
  <div className="nav">
    <ul>
      <Link exact={true} to="/" activeClassName="active">
        <li>
          <div>
            <GoHome className="menuIcon" />
          </div>
          <div className="desc">Home</div>
        </li>
      </Link>
      <Link to="/projects" activeClassName="active">
        <li>
          <div>
            <GoMicroscope className="menuIcon" />
          </div>
          <div className="desc">Projects</div>
        </li>
      </Link>
      <Link to="/about" activeClassName="active">
        <li>
          <div>
            <GoPerson className="menuIcon" />
          </div>
          <div className="desc">About</div>
        </li>
      </Link>
      <a href="CV2red.pdf">
        <li>
          <div>
            <GoChecklist className="menuIcon" />
          </div>
          <div className="desc">CV</div>
        </li>
      </a>
      <Link to="/contact" activeClassName="active">
        <li>
          <div>
            <GoMail className="menuIcon" />
          </div>
          <div className="desc">Contact</div>
        </li>
      </Link>
    </ul>
  </div>
);

export default Navigation;

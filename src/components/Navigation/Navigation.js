import React from 'react';
import Link from 'gatsby-link';
import { GoHome, GoKey, GoMicroscope, GoPerson, GoPlug, GoFileBinary, GoChecklist, GoMail } from 'react-icons/lib/go/';
import Scrollspy from 'react-scrollspy';
import './Navigation.scss';

const Navigation = () => (
  <div className="nav">
    <Scrollspy items={['home', 'projects', 'about', 'contact']} currentClassName="active">
      <a href="#home" activeClassName="active">
        <li>
          <div>
            <GoHome className="menuIcon" />
          </div>
          <div className="desc">Home</div>
        </li>
      </a>
      <a href="#projects">
        <li>
          <div>
            <GoMicroscope className="menuIcon" />
          </div>
          <div className="desc">Projects</div>
        </li>
      </a>
      <a href="#about" activeClassName="active">
        <li>
          <div>
            <GoPerson className="menuIcon" />
          </div>
          <div className="desc">About</div>
        </li>
      </a>
      <a href="/CVMZFrontEnd.pdf">
        <li>
          <div>
            <GoChecklist className="menuIcon" />
          </div>
          <div className="desc">CV</div>
        </li>
      </a>
      <a href="#contact" activeClassName="active">
        <li>
          <div>
            <GoMail className="menuIcon" />
          </div>
          <div className="desc">Contact</div>
        </li>
      </a>
    </Scrollspy>
  </div>
);

export default Navigation;

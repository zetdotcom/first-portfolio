import React from 'react';
import Link from 'gatsby-link';
import {
  GoHome,
  GoKey,
  GoMicroscope,
  GoPerson,
  GoPlug,
  GoFileBinary,
  GoChecklist,
  GoMail
} from 'react-icons/lib/go/';

import './Navigation.scss';

const Navigation = () => <div className="nav">
  <ul>
    <li>
      <div><GoHome className="menuIcon"/></div>
      <div className="desc">Home</div>
    </li>
    <li>
      <div><GoKey className="menuIcon"/></div>
      <div className="desc">Skills</div>
    </li>
    <li>
      <div><GoMicroscope className="menuIcon"/></div>
      <div className="desc">Projects</div>
    </li>
    <li>
      <div><GoPerson className="menuIcon"/></div>
      <div className="desc">About</div>
    </li>
    <li>
      <div><GoChecklist className="menuIcon"/></div>
      <div className="desc">CV</div>
    </li>
    <li>
      <div><GoMail className="menuIcon"/></div>
      <div className="desc">Contact</div>
    </li>
  </ul>
</div>;

export default Navigation;

import React from 'react';
import Link from 'gatsby-link';

import './index.scss';
import '../components/HomePage/HomePage.scss';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
        </div>
        <div className="links">
          <div className="row1">
            <Link to="/projects/" className="linkBox">
              <div>Projects</div>
            </Link>

            <Link to="/about/" className="linkBox">
              <div>About Me</div>
            </Link>
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
      </div>
    );
  }
}

export default IndexPage;

// checkOffset() { 	const offTop = document.getElementById('skillsComp');
// 	function offset(el) { 		var rect = el.getBoundingClientRect(), 			scrollTop
// = window.pageYOffset || document.documentElement.scrollTop; 		return { top:
// rect.top + scrollTop }; 	} 	var divOffset = offset(offTop);
// 	console.log(divOffset.top); } checkPos() { 	const elem =
// document.getElementById('aa'); 	const content =
// document.getElementById('content'); 	function offset(el) { 		const rect =
// el.getBoundingClientRect(), 			scrollTop = window.pageYOffset ||
// document.documentElement.scrollTop; 		return { top: rect.top + scrollTop };
// 	} 	const elPos = offset(elem).top; 	console.log(elPos); 	elem.style.position
// = 'relative'; 	elem.scrollIntoView(true); } changePos() {
// 	window.scrollBy(0, 250); }

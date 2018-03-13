import React from 'react';
import Link from 'gatsby-link';

import './index.scss';
import '../components/HomePage/HomePage.scss';
import HomePage from '../components/HomePage/HomePage';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePage />
        <Projects />
        <About />
        <Contact />
        <div style={{ height: '40px', color: 'orange', marginLeft: '20px' }}>&#9400; 2018 zetdotcom</div>
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

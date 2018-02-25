import React from 'react';
import Link from 'gatsby-link';
import HomePage from '../components/HomePage/HomePage';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';

import About from '../components/About/About';

import Wip from '../components/Wip/Wip';

import './index.scss';

class IndexPage extends React.Component {
		constructor(props) {
				super(props);
		}

		render() {
				return (
						<div className="app" id="app">
								<div className="content" id="content">
										<Wip/>
										<HomePage/>
										<Projects/>
										<section className="skillsComp" id="skillsComp">
												<Skills/>
										</section>
										<section className="aboutComp">
												<About/>
										</section>
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
// = 'relative'; 	elem.scrollIntoView(true); } changePos() { 	window.scrollBy(0,
// 250); }
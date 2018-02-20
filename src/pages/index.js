import React from 'react';
import Link from 'gatsby-link';
import Navigation from '../components/Navigation/Navigation';
import HomePage from '../components/HomePage/HomePage';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Contact from '../components/Contact/Contanct';
import Wip from '../components/Wip/Wip';
import scrollToComponent from 'react-scroll-to-component';

import './index.scss';

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				<Navigation className="menu" />
				<div className="content">
					<Wip />
					<HomePage />
					<Skills />
					<Projects id="projects" />
					<About />
					<Contact />
				</div>
			</div>
		);
	}
}

export default IndexPage;

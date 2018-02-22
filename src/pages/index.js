import React from 'react';
import Link from 'gatsby-link';
import HomePage from '../components/HomePage/HomePage';
import Skills from '../components/Skills/Skills';

import About from '../components/About/About';

import Wip from '../components/Wip/Wip';

import './index.scss';

class IndexPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="app">
				<div className="content">
					<Wip />

					<HomePage />
					<section className="skillsComp">
						<Skills />
					</section>
					<section className="aboutComp">
						<About />
					</section>
				</div>
			</div>
		);
	}
}

export default IndexPage;

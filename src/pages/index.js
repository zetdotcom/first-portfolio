import React from 'react';
import Link from 'gatsby-link';
import HomePage from '../components/HomePage/HomePage';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Contact from '../components/Contact/Contanct';
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
										<Wip/>

										<HomePage/>

										<Skills id="skills"/>

										<Projects/>
										<About/>
										<Contact/>
								</div>
						</div>
				);
		}
}

export default IndexPage;

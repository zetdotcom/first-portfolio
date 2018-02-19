import React from 'react';
import Link from 'gatsby-link';
import HomePage from '../components/HomePage/HomePage';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Contact from '../components/Contact/Contanct';

const IndexPage = () => (
	<div>
		<HomePage />

		<Skills id="skills" />
		<Projects id="projects" />
		<About />
		<Contact />
	</div>
);

export default IndexPage;

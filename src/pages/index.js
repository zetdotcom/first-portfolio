import React from 'react';
import Link from 'gatsby-link';
import HomePage from '../components/HomePage/HomePage';
import Skills from '../components/Skills/Skills';

const IndexPage = () => (
	<div>
		<HomePage />

		<Link to="/page-2/">Go to next page</Link>
		<Skills />
	</div>
);

export default IndexPage;

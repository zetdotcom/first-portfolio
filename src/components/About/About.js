import React from 'react';
import Link from 'gatsby-link';

import './About.scss';

const About = () => {
	return (
		<div className="wrapper">
			<div className="about">
				<div className="title">
					<h1>About Me</h1>
				</div>
				<div className="aboutMe">Something about me.</div>
			</div>
		</div>
	);
};

export default About;

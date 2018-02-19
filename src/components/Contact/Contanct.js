import React from 'react';
import Link from 'gatsby-link';

import './Contact.scss';

const Contact = () => {
	return (
		<div className="wrapper">
			<div className="contact">
				<div className="title">
					<h1>Contact</h1>
				</div>
				<div className="contactMe">
					<ul>
						<li>
							<a href="mailto:michal.zadarnowskigmail.com">michal.zadarnowski@gmail.com</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/michal-zadarnowski-559259143/" target="blank">
								LinkedIn
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;

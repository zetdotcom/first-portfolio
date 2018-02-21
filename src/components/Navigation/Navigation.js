import React from 'react';
import Link from 'gatsby-link';
import {
		GoHome,
		GoKey,
		GoMicroscope,
		GoPerson,
		GoPlug,
		GoFileBinary,
		GoChecklist,
		GoMail
} from 'react-icons/lib/go/';

import './Navigation.scss';

const Navigation = () => (
		<div className="nav">
				<ul>
						<Link to="/">
								<li>
										<div>
												<GoHome className="menuIcon"/>
										</div>
										<div className="desc">Home</div>
								</li>
						</Link>
						<li>
								<div>
										<GoKey className="menuIcon"/>
								</div>
								<div className="desc">Skills</div>
						</li>
						<Link to="/projects">
								<li>
										<div>
												<GoMicroscope className="menuIcon"/>
										</div>
										<div className="desc">Projects</div>
								</li>
						</Link>
						<li>
								<div>
										<GoPerson className="menuIcon"/>
								</div>
								<div className="desc">About</div>
						</li>
						<li>
								<a href="CV2red.pdf">
										<div>
												<GoChecklist className="menuIcon"/>
										</div>
										<div className="desc">CV</div>
								</a>
						</li>
						<li>
								<div>
										<GoMail className="menuIcon"/>
								</div>
								<div className="desc">Contact</div>
						</li>
				</ul>
		</div>
);

export default Navigation;

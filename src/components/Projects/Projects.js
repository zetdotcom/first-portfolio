import React from 'react';
import Link from 'gatsby-link';

import './Projects.scss';
import ProjectsList from '../../json/projects.json';

const Projects = () => {
	return (
		<div className="wrapper">
			<div className="projects">
				<div className="title">
					<h1>Projects</h1>
				</div>
				<div className="projectsList">
					<ul>
						{ProjectsList.map((item, key) => {
							return (
								<li key={key}>
									{item.title}
									<button>
										<a href={item.link} target="blank">
											Visti Website
										</a>
									</button>
									<button>
										<a href={item.git} target="blank">
											Git repo
										</a>
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Projects;

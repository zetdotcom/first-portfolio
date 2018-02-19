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
									<a href={item.link} target="blank">
										<button>Visti Website</button>
									</a>
									<a href={item.git} target="blank">
										<button>Git repo</button>
									</a>
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

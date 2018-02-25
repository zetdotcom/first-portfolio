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

										{ProjectsList.map((item, key) => {
												const checkRepo = () => {
														if (item.git === "") {
																return <button >Private repo</button>
														} else {
																return <a href={item.git} target="blank">
																		<button >Git repo</button>
																</a>
														}
												};
												const skillso = () => {
														item
																.skills
																.map((skill) => {
																		return <div>{skill}
																		</div>
																})
												};
												return (
														<div className="project" key={key}>
																<div className="projectTitle">
																		{item.title}</div>
																<div className="thumbnail"><img src="images/bootstrap.png"/></div>
																<div className="projectsSkills">{item.skills}</div>
																<div className="links">
																		<a href={item.link} target="blank">
																				<button>Visti Website</button>
																		</a>
																		{checkRepo()}
																</div>
																<div className="description">description of project description of project
																		description of project description of project description of project description
																		of project.</div>
														</div>
												);
										})}

								</div>
						</div>
				</div>
		);
};

export default Projects;

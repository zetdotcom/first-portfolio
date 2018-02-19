import React from 'react';
import Link from 'gatsby-link';

import './Skills.scss';
import SkillsList from '../../json/skills.json';

const Skills = () => {
	return (
		<div className="wrapper">
			<div className="skills">
				<div className="title">
					<h1>Skills</h1>
				</div>
				<div className="skillsList">
					<ul>
						{SkillsList.map((s, key) => {
							return <li key={key}>{s.name}</li>;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Skills;

import React from 'react';
import Link from 'gatsby-link';

import './Skills.scss';
import SkillsList from '../../json/skills.json';

class Skills extends React.Component {
		constructor() {
				super();
				this.skillSet = this
						.skillSet
						.bind(this);
		}
		skillSet() {
				return SkillsList.map((s, key) => {

						return (
								<div className="skill">
										<div className="skillImg">
												<img src={s.icon} alt="css3"/></div>
										<div className="skillName">{s.name}</div>
								</div>
						)
				})
		}
		render() {

				return (
						<div className="wrapper" id="skills">
								<div className="skills">
										<div className="title">
												<h1>Skills</h1>
										</div>
										<div className="skillsList">
												{this.skillSet()}
										</div>
								</div>
						</div>

				);
		}
};
export default Skills;

//
// <ul > { 		SkillsList.map((s, key) => { 				return <li
// key={key}>{s.name}</li>; 		}) } < /ul> const img = { 	bootsrap:
// require('../../images/bootstrap.jpg'), 	css:
// require('../../images/css3.jpg'), 	es6: require('../../images/es6.png'),
// 	gatsby: require('../../images/gatsby.png'), 	git:
// require('../../images/git.png'), 	github: require('../../images/github.png'),
// 	html: require('../../images/html5.jpg'), 	jq:
// require('../../images/jq.jpg'), 	js: require('../../images/js.jpg'), 	npm:
// require('../../images/npm.png'), 	react: require('../../images/react.png'),
// 	sass: require('../../images/sass.png') };
import React from 'react';
import Link from 'gatsby-link';

import './Projects.scss';
import ProjectsList from '../../json/projects.json';

const project = () => {
  return ProjectsList.map((item, key) => {
    const checkRepo = () => {
      if (item.git === '') {
        return <button>Private repo</button>;
      } else {
        return (
          <a href={item.git} target="blank">
            <button>Git repo</button>
          </a>
        );
      }
    };
    const skillso = () => {
      return item.skills.map((el, k) => {
        return <div key={k}>{el}</div>;
      });
    };
    return (
      <div className="project" key={key}>
        <div className="projectTitle">{item.title}</div>
        <div className="info">
          <div className="thumbnail">
            <img src={item.img} />
          </div>
          <div className="description">
            <div className="descText">{item.desc}</div>
            <div className="links">
              <a href={item.link} target="blank">
                <button>Visti Website</button>
              </a>
              {checkRepo()}
            </div>
          </div>
        </div>
        <div className="projectSkills">{skillso()}</div>
      </div>
    );
  });
};

const Projects = () => {
  return (
    <div className="wrapper">
      <div className="projects">
        <div className="title">
          <h1>Projects</h1>
        </div>
        <div className="projectsList">{project()}</div>
      </div>
    </div>
  );
};

export default Projects;

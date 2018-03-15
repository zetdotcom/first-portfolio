import React from 'react';
import Link from 'gatsby-link';

import './Projects.scss';
import ProjectsList from '../../json/projects.json';

import MdVisibility from 'react-icons/lib/md/visibility';

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
        return (
          <div className="skill" key={k}>
            {el}
          </div>
        );
      });
    };
    return (
      <div className="project" key={key}>
        <div className="projectTitle">{item.title}</div>
        <div className="thumbnail">
          <img src={item.img} />
          <div className="links">
            <a href={item.link} target="blank">
              <button>Visit Website</button>
            </a>
            {checkRepo()}
          </div>
        </div>
        <div className="description">
          <div className="projectSkills">{skillso()}</div>
        </div>
      </div>

      //   <div className="project" key={key}>
      //   <div className="projectTitle">{item.title}</div>
      //   <div className="info">
      //     <div className="thumbnail">
      //       <img src={item.img} />
      //     </div>
      //     <div className="links">
      //       <a href={item.link} target="blank">
      //         <button>Visit Website</button>
      //       </a>
      //       {checkRepo()}
      //     </div>
      //     <div className="description">
      //       <div className="projectSkills">{skillso()}</div>
      //     </div>
      //   </div>
      // </div>
    );
  });
};

const Projects = () => {
  return (
    <div className="wrapper" id="projects">
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

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
        <div className="info">
          <div className="aboutMe">
            <div>
              <h2>Front-End / React/ Javascript developer</h2>
              <p>Really passionate about web development, problem solving, and a good and accessible design.</p>
              <p>
                Focusing on front end development technologies, feeling confident with html, css and javascript, now on
                route to master React, Redux, testing and all other associated technologies.
              </p>

              <p>
                Currently during career path change - from becoming professional Accountant I have decided to become a
                successful Web Developer. Even though I have a degree in accountancy, and was close to becoming
                Chartered Accountant I do not regret my decision.
              </p>
              <p>
                Spending many of my evenings developing my Front-End skills or working on side projects I am really
                serious about my career change decision and the plan for future is to become Front-End Senior/ Engineer/
                Architect of even Fullstack or Software Developer in the future. With passion and ambitions I believe
                this will happen.
              </p>
            </div>
          </div>
          <div className="photo">
            <div className="myImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

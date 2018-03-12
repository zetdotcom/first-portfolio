import React from 'react';
import Link from 'gatsby-link';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="wrapper" id="contact">
      <div className="contact">
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="contactMe">
          <div className="form">
            <form method="POST" action="https://formspree.io/michal.zadarnowski@gmail.com">
              <input type="email" name="email" placeholder="Your email" />
              <input type="text" name="subject" placeholder="Subject" />
              <input type="hidden" name="_next" value="//zetdotcom.github.io" />
              <textarea name="message" placeholder="Your message" />
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="contactLinks">
            <div className="contactLink contactEmail">
              <a href="mailto:michal.zadarnowskigmail.com">michal.zadarnowski@gmail.com</a>
            </div>
            <div className="contactLink contactLinkedin">
              <a href="https://www.linkedin.com/in/michal-zadarnowski-559259143/" target="blank">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation/Navigation';
import FloatWords from '../components/FloatWords/FloatWords';
import './index.scss';
import './layouts.scss';

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]');
}

const checkLocation = () => {
  if (typeof window !== `undefined`) {
    if (window.location.pathname !== '/') {
      return <Navigation />;
    }
  }
};
const TemplateWrapper = ({ children }) => (
  <div className="app">
    <Helmet
      title="ZETDOTCOM"
      meta={[
        {
          name: 'description',
          content: 'Sample'
        },
        {
          name: 'keywords',
          content: 'sample, something'
        }
      ]}
    />
    <div className="navi">
      <Navigation />
    </div>
    <div className="kids">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

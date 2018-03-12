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
    <div>
      <Navigation className="navi" />
    </div>
    <div
      style={{
        margin: '0 auto',

        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
      className="kids"
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

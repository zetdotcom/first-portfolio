import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation/Navigation';
import FloatWords from '../components/FloatWords/FloatWords';
import './index.scss';
import './layouts.scss';

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
    <div className="container">
      <FloatWords />
      {checkLocation()}

      <div className="content">{children()}</div>
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

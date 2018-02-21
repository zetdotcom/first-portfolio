import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation/Navigation';
import './index.scss';
import './layouts.scss';

const TemplateWrapper = ({children}) => (
		<div>
				<Helmet
						title="ZETDOTCOM"
						meta={[
						{
								name: 'description',
								content: 'Sample'
						}, {
								name: 'keywords',
								content: 'sample, something'
						}
				]}/>
				<div className="container">
						<Navigation className="menu"/>
						<div className="content">{children()}</div>
				</div>
		</div>
);

TemplateWrapper.propTypes = {
		children: PropTypes.func
};

export default TemplateWrapper;

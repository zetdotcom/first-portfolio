import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation/Navigation';
import './index.scss';
import './layouts.scss';

const checkLocation = () => {
		if (location.pathname !== "/") {
				return < Navigation className = "menu" />
}
};
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
				{checkLocation()}

				<div className="content">{children()}</div>

		</div>
</div>
);

TemplateWrapper.propTypes = {
children: PropTypes.func
};

export default TemplateWrapper;

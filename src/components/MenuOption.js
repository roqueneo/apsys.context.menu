import React from 'react';
import PropTypes from 'prop-types';

/**
 * Presentional component to render the menu options
 * @param {object} props 
 */
const MenuOption = (props) => {
	const { label, ...others } = props;
	return <div {...others}>{label || ''}</div>;
};

MenuOption.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

MenuOption.defaultProps = {
	onClick: () => console.warn('[onClick] not defined!')
};

export default MenuOption;

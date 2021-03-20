import React from 'react';
import PropTypes from 'prop-types';

/**
 * Presentional component to render the menu options
 * @param {object} props
 */
const MenuOption = (props) => {
	const { label, ...others } = props;
	return (
		<div {...others} style={{ cursor: 'pointer', backgroundColor: 'lightgrey', padding: '3px 5px', textAlign: 'left' }}>
			<span>{label || ''}</span>
		</div>
	);
};

MenuOption.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

MenuOption.defaultProps = {
	onClick: () => console.warn('[onClick] not defined!')
};

export default MenuOption;

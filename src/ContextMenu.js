import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/** Custom components import section */
import MenuOption from './components/MenuOption';

/** Resources import section */
import * as constants from './constants';

/**
 * Method to get the description of some filter type.
 *
 * @param {string} filterType The value which represents one of the allowed filter types
 */
const getFilterDescription = (filterType) => {
	switch (filterType) {
		case constants.TEXT_FILTER:
			return 'texto';
		case constants.NUMBER_FILTER:
			return 'número';
		case constants.DATE_FILTER:
			return 'fecha';

		default:
			return '';
	}
};

const ContextMenu = (props) => {
	/** Destructuring properties */
	const { elementId, filterType, filterName, onClearFilterOptionClick } = props;

	/** Defines local state */
	const [contextMenuState, setContextMenuState] = useState({ open: false });

	/**
	 * Verify if element with given id exists on DOM
	 */
	useEffect(() => {
		const nodes = document.querySelectorAll(`[context-id = "${elementId}"]`);
		if (nodes.length > 0) {
			const anchorEl = nodes[0];
			const { x, y, height } = anchorEl.getBoundingClientRect();
			setContextMenuState({ open: true, x: x, y: y + height });
		}
	}, [elementId]);

	/**
	 * Open the context menu
	 */
	useEffect(() => {
		const { x, y } = contextMenuState;
		const menuEl = document.getElementById(`context-menu-${elementId}`);
		if (menuEl) {
			menuEl.style.position = 'absolute';
			menuEl.style.left = `${x}px`;
			menuEl.style.top = `${y}px`;
		}
	}, [elementId, contextMenuState]);

	/**
	 * Handle ckick event over clear filter option.
	 * If onClearFilterOptionClick callback is injected to componenet it is called
	 */
	const handleClearFilterOptionClick = () => {
		setContextMenuState({ open: false });
		if (onClearFilterOptionClick) {
			onClearFilterOptionClick();
		}
	};

	/**
	 * Render the content of context menu
	 */
	if (!contextMenuState.open) {
		return null;
	}
	return (
		<div id={`context-menu-${elementId}`}>
			<MenuOption onClick={handleClearFilterOptionClick} label={`Borrar filtro ${filterName && `de ${filterName}`}`} />
			<MenuOption label={`Filtros de ${getFilterDescription(filterType)}`} />
		</div>
	);
};

ContextMenu.propTypes = {
	elementId: PropTypes.string.isRequired,
	filterType: PropTypes.oneOf([constants.TEXT_FILTER, constants.NUMBER_FILTER, constants.DATE_FILTER]),
	filterName: PropTypes.string,
	onClearFilterOptionClick: PropTypes.func,
	options: PropTypes.shape({
		serverSide: PropTypes.bool.isRequired,
		items: PropTypes.array,
		url: PropTypes.string
	})
};

ContextMenu.defaultProps = {
	filterType: constants.TEXT_FILTER
};

export default ContextMenu;

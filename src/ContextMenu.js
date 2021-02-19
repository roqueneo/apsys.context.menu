import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as constants from './constants';

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
	const { elementId, filterType, filterName } = props;

	const [contextMenuState, setContextMenuState] = useState({ open: false });

	useEffect(() => {
		const nodes = document.querySelectorAll(`[context-id = "${elementId}"]`);
		if (nodes.length > 0) {
			const anchorEl = nodes[0];
			const rect = anchorEl.getBoundingClientRect();
			setContextMenuState({ open: true, x: rect.x, y: rect.y + rect.height });
		}
	}, [elementId]);

	useEffect(() => {
		const { x, y } = contextMenuState;
		const menuEl = document.getElementById(`context-menu-${elementId}`);
		if (menuEl) {
			menuEl.style.position = 'absolute';
			menuEl.style.left = x + 'px';
			menuEl.style.top = y + 'px';
		}
	}, [elementId, contextMenuState]);

	if (!contextMenuState.open) return null;
	return (
		<div id={`context-menu-${elementId}`}>
			<div>Borrar filtro {filterName && `de ${filterName}`}</div>
			<div>Filtros de {getFilterDescription(filterType)}</div>
		</div>
	);
};

ContextMenu.propTypes = {
	elementId: PropTypes.string.isRequired,
	filterType: PropTypes.oneOf([constants.TEXT_FILTER, constants.NUMBER_FILTER, constants.DATE_FILTER]),
	filterName: PropTypes.string,
	option: PropTypes.shape({
		serverSide: PropTypes.bool.isRequired,
		items: PropTypes.array,
		url: PropTypes.string
	})
};

ContextMenu.defaultProps = {
	filterType:  constants.TEXT_FILTER
};

export default ContextMenu;

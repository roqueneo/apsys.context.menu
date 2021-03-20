import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';

/** Custom components import section */
import MenuOption from './components/MenuOption';

/** Resources import section */
import * as constants from './constants';
import FilterItems from './components/FilterItems';

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
	const {
		elementId,
		filterType,
		filterName,
		onApplyFilterClick,
		onClearFilterClick,
		filterOptions: { serverSide, items }
	} = props;

	/** Defines local state */
	const [contextMenuState, setContextMenuState] = useState({ opened: false, elementId: null, anchorEl: null });
	const [opened, setOpened] = useState(false);
	// const [anchorEl, setAnchorEl] = useState(null);
	const [visibleFilterItems, setVisibleFilterItems] = useState({});
	// console.log(`🚀 ~ file: ContextMenu.js ~ line 45 ~ ContextMenu ~ visibleFilterItems`, visibleFilterItems);

	const hideMenu = useCallback(() => setOpened(false), [setOpened]);

	/**
	 * Verify if element with given id exists on DOM
	 */
	useEffect(() => {
		const nodes = document.querySelectorAll(`[context-id = "${elementId}"]`);

		const handleOutsideClick = (e) => {
			// if (!menuRef.current.contains(e.target)) {
			// 	setSelectedIndex(-1);
			// 	hideMenu();
			// }
		};

		if (nodes.length > 0) {
			const anchorEl = nodes[0];
			// console.log(`🚀 ~ file: ContextMenu.js ~ line 63 ~ useEffect ~ anchorEl`, anchorEl);

			const openMenu = () => {
				setOpened(true);
			};

			if (anchorEl.addEventListener) {
				anchorEl.addEventListener('click', openMenu, false);
			}

			document.addEventListener('mousedown', handleOutsideClick);

			const { x, y, height } = anchorEl.getBoundingClientRect();
			// console.log(`🚀 ~ file: ContextMenu.js ~ line 67 ~ useEffect ~ rect`, { x, y });
			setContextMenuState({ opened: true, x: x, y: y + height, elementId, anchorEl });
			setOpened(true);
		}
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
			// document.removeEventListener('touchstart', handleOutsideClick);
			// document.removeEventListener('scroll', hideMenu);
			// document.removeEventListener('contextmenu', hideMenu);
			// document.removeEventListener('keydown', handleKeyNavigation);
		};
	}, [elementId, hideMenu]);

	/**
	 * Opened the context menu.
	 */
	useLayoutEffect(() => {
		if (opened) {
			const { x, y } = contextMenuState;
			// const { x, y, height } = anchorEl.getBoundingClientRect();
			// console.log(`🚀 ~ file: ContextMenu.js ~ line 97 ~ useLayoutEffect ~ { x, y }`, { x, y });
			const menuEl = document.getElementById(`context-menu-${elementId}`);
			if (menuEl) {
				menuEl.style.position = 'absolute';
				menuEl.style.left = `${x}px`;
				menuEl.style.top = `${y}px`;
			}
		}
	}, [elementId, opened, contextMenuState]);

	useEffect(() => {
		if (items && items.length > 0) {
			const initialVisibleItems = {};
			items.forEach((item) => {
				initialVisibleItems[item.id] = { ...item, selected: false };
			});
			setVisibleFilterItems(initialVisibleItems);
		}
	}, [items]);

	/**
	 * Handle click event over clear filter option.
	 * If onClearFilterClick callback is injected to componenet it is called.
	 */
	const handleClearFilterClick = () => {
		setOpened(false);
		onClearFilterClick();

		const initialVisibleItems = {};
		items.forEach((item) => {
			initialVisibleItems[item.id] = { ...item, selected: false };
		});
		setVisibleFilterItems(initialVisibleItems);

	};

	/**
	 * Update filter items in order to set as selected or not selected the clicked item.
	 * @param {object} event
	 */
	const updateSelectedItems = (event) => {
		const optionId = event.currentTarget.getAttribute('data-id');
		if (visibleFilterItems[optionId]) {
			const item = visibleFilterItems[optionId];
			const newValue = !item.selected;
			setVisibleFilterItems((prevState) => ({ ...prevState, [optionId]: { ...item, selected: newValue } }));
		}
	};

	/**
	 * Handle the click on apply button
	 */
	const handleApplyFilterClick = () => {
		const selectedItems = Object.values(visibleFilterItems)
			.filter(({ selected }) => selected)
			.map(({ id, label }) => ({ id, label }));
		onApplyFilterClick(selectedItems);
		setOpened(false);
	};

	/**
	 * Render the content of context menu
	 */
	if (!opened) {
		return null;
	}

	return (
		<div id={`context-menu-${elementId}`} style={{ border: '1px solid blue' }}>
			<MenuOption onClick={handleClearFilterClick} label={`Borrar filtro ${filterName && `de ${filterName}`}`} />
			<MenuOption label={`Filtros de ${getFilterDescription(filterType)}`} />
			<FilterItems items={visibleFilterItems} onFilterOptionClick={updateSelectedItems} />
			<div style={{ border: '1px solid gray' }} />
			<div style={{ textAlign: 'right', padding: '2px 10px 4px 10px', backgroundColor: 'lightgrey' }}>
				<button onClick={handleApplyFilterClick}>Aplicar</button>
			</div>
		</div>
	);
};

ContextMenu.propTypes = {
	elementId: PropTypes.string.isRequired,
	filterType: PropTypes.oneOf([constants.TEXT_FILTER, constants.NUMBER_FILTER, constants.DATE_FILTER]),
	filterName: PropTypes.string,
	onApplyFilterClick: PropTypes.func,
	onClearFilterClick: PropTypes.func,
	filterOptions: PropTypes.shape({
		serverSide: PropTypes.bool.isRequired,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				label: PropTypes.string.isRequired
			})
		),
		url: PropTypes.string
	})
};

ContextMenu.defaultProps = {
	filterType: constants.TEXT_FILTER,
	onApplyFilterClick: () => console.warn('[onApplyFilterClick] not defined!')
};

export default ContextMenu;

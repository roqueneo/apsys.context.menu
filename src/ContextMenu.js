import React from 'react';
import PropTypes from 'prop-types';
import ContextMenuNumeric from './ContextMenuNumeric';
import ContextMenuText from './ContextMenuText';
import ContextMenuDate from './ContextMenuDate';
import Menu from './stories/Menu';
import SubMenu from './SubMenu';
import useContextMenu from './useContextMenu';

const ContextMenu = (props) => {
	const { bindMenu, data, coords, bindMenuItem, setClickedCmd, hideMenu } = props;

	const [
		bindSubMenu,
		bindSubMenuItem,
		useSubMenuContextTrigger,
		{ subMenuData, subMenuCoords, setSubMenuVisible }
	] = useContextMenu();

	const [bindSubMenuTrigger] = useSubMenuContextTrigger();

	const hideSubMenu = () => setSubMenuVisible(false);

	const handleMenuItemClick = (n) => () => {
		console.log(`🚀 ~ file: ContextMenu.js ~ line 28 ~ handleMenuItemClick ~ n`, n);
		if (n === 'AdvancedFilters') {
            console.log(`🚀 ~ file: ContextMenuNumeric.js ~ line 11 ~ handleMenuItemClick ~ n`, n);
            // setSubMenuVisible()
		} else {
			setClickedCmd(n);
			hideMenu();
		}
	};

	const renderContent = () => {
		switch (data) {
			case 'TEXT':
				return (
					<ContextMenuText
						bindMenu={bindMenu}
						data={data}
						bindMenuItem={bindMenuItem}
						coords={coords}
						setClickedCmd={setClickedCmd}
						hideMenu={hideMenu}
					/>
				);
			case 'DATE':
				return (
					<ContextMenuDate
						bindMenu={bindMenu}
						data={data}
						bindMenuItem={bindMenuItem}
						coords={coords}
						setClickedCmd={setClickedCmd}
						hideMenu={hideMenu}
					/>
				);
			case 'NUMBER':
				return (
					<ContextMenuNumeric
						bindMenu={bindMenu}
						data={data}
						bindMenuItem={bindMenuItem}
						coords={coords}
						setClickedCmd={setClickedCmd}
						handleMenuItemClick={handleMenuItemClick}
						hideMenu={hideMenu}
					/>
				);
			default:
				return (
					<Menu
						bindMenu={bindMenu}
						data={data}
						bindMenuItem={bindMenuItem}
						coords={coords}
						setClickedCmd={setClickedCmd}
						hideMenu={hideMenu}
					/>
				);
		}
	};

	return (
		<div {...bindMenu}>
			{renderContent()}
			<SubMenu
				bindMenu={bindSubMenu}
				data={subMenuData}
				bindMenuItem={bindSubMenuItem}
				coords={subMenuCoords}
				setClickedCmd={(value) => console.log(`sub menu item selected: ${value}`)}
				hideMenu={hideSubMenu}
			/>
		</div>
	);
};

ContextMenu.propTypes = {};

export default ContextMenu;

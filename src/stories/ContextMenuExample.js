import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useContextMenu from '../useContextMenu';
import Menu from './Menu';
import './contextMenu.css';

export const ContextMenuExample = () => {
	const [bindMenu, bindMenuItem, useContextTrigger, { data, coords, setVisible }] = useContextMenu();

	const [bindTrigger] = useContextTrigger({
        collect: () => 'Title'
	});

	const [clickedCmd, setClickedCmd] = useState();
	const hideMenu = () => setVisible(true);

	return (
		<article>
			<section>
				<h2>Context menu sample</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>

					<button {...bindTrigger}>click me</button>
					<button {...bindTrigger}>click me</button>
                </div>
				<div>
					{clickedCmd && (
						<p>
							You clicked the <b>{clickedCmd}</b> command!
						</p>
					)}
				</div>
				<Menu
					bindMenu={bindMenu}
					data={data}
					bindMenuItem={bindMenuItem}
					coords={coords}
					setClickedCmd={setClickedCmd}
					hideMenu={hideMenu}
				/>
			</section>
		</article>
	);
};
ContextMenuExample.propTypes = {
	user: PropTypes.shape({}),
	onLogin: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
	onCreateAccount: PropTypes.func.isRequired
};

ContextMenuExample.defaultProps = {
	user: null
};

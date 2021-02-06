import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useContextMenu from '../useContextMenu';
import './contextMenu.css';
import ContextMenu from '../ContextMenu';

export const ContextMenuExample = () => {
	const [bindMenu, bindMenuItem, useContextTrigger, { data, coords, setVisible }] = useContextMenu();

	const [bindTrigger] = useContextTrigger();
	const [bindCustomTrigger] = useContextTrigger({
        collect: () => 'CUSTOM'
	});
	const [bindNumberTrigger] = useContextTrigger({
        collect: () => 'NUMBER'
	});
	const [bindDateTrigger] = useContextTrigger({
        collect: () => 'DATE'
	});
	const [bindTextTrigger] = useContextTrigger({
        collect: () => 'TEXT'
	});

	const [clickedCmd, setClickedCmd] = useState();
	const hideMenu = () => setVisible(true);

	return (
		<article>
			<section>
				<h2>Context menu sample</h2>
				<div className= 'container'>
					<div>
						<button {...bindTrigger}>click me</button>
						<button {...bindTextTrigger}>click me</button>
					</div>
					<div>
						<button {...bindCustomTrigger}>click me</button>
					</div>
					<div>
						<button {...bindNumberTrigger}>click me</button>
						<button {...bindDateTrigger}>click me</button>
					</div>
				</div>
				<div>
					{clickedCmd && (
						<p>
							You clicked the <b>{clickedCmd}</b> command!
						</p>
					)}
				</div>
				<ContextMenu
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

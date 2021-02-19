import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './contextMenu.css';
import ContextMenu from '../ContextMenu';

const filtersConfig = {
	'btn-1': {
		elementId: 'btn-1',
		filterType: 'TEXT',
		filterName: 'Boton 1'
	},
	'btn-2': {
		elementId: 'btn-2',
		filterType: 'NUMBER',
		filterName: 'Boton 2'
	},
	'btn-3': {
		elementId: 'btn-3',
		filterType: 'DATE',
		filterName: 'Boton 3'
	},
	'btn-4': {
		elementId: 'btn-4',
		filterType: 'TEXT',
	},
	'btn-5': {
		elementId: 'btn-5',
		filterType: 'TEXT',
		filterName: 'Boton 5'
	}
};

export const ContextMenuExample = () => {
	const [contextMenuConfig, setContextMenuConfig] = useState({ elementId: '' });

	const click = (event) => {
		const { target } = event;
		const contextId = target.getAttribute('context-id');
		const config = filtersConfig[contextId];
		setContextMenuConfig(config);
	};

	return (
		<article>
			<section>
				<h2>Context menu sample</h2>
				<div className="container">
					<div>
						<button context-id="btn-1" onClick={click}>
							click me
						</button>
						<button context-id="btn-2" onClick={click}>
							click me
						</button>
					</div>
					<div>
						<button context-id="btn-3" onClick={click}>
							click me
						</button>
					</div>
					<div>
						<button context-id="btn-4" onClick={click}>
							click me
						</button>
						<button context-id="btn-5" onClick={click}>
							click me
						</button>
					</div>
				</div>
				<div>
					{false && (
						<p>
							You clicked the <b></b> command!
						</p>
					)}
				</div>
				<ContextMenu {...contextMenuConfig} />
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

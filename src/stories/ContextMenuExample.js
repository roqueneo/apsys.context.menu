import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './contextMenu.css';
import ContextMenu from '../ContextMenu';

import * as filterTypes from '../constants';

const filtersConfig = {
	'btn-1': {
		elementId: 'btn-1',
		filterType: filterTypes.TEXT_FILTER,
		filterName: 'Boton 1'
	},
	'btn-2': {
		elementId: 'btn-2',
		filterType: filterTypes.NUMBER_FILTER,
		filterName: 'Boton 2'
	},
	'btn-3': {
		elementId: 'btn-3',
		filterType: filterTypes.DATE_FILTER,
		filterName: 'Boton 3'
	},
	'btn-4': {
		elementId: 'btn-4',
		filterType: filterTypes.TEXT_FILTER
	},
	'btn-5': {
		elementId: 'btn-5',
		filterType: filterTypes.TEXT_FILTER,
		filterName: 'Boton 5'
	}
};

const filterOptions = [
	{
		id: 'opt01',
		label: 'Opción a'
	},
	{
		id: 'opt02',
		label: 'Opción b'
	},
	{
		id: 'opt03',
		label: 'Opción c'
	},
	{
		id: 'opt04',
		label: 'Opción d'
	},
	{
		id: 'opt05',
		label: 'Opción e'
	},
	{
		id: 'opt06',
		label: 'Opción f'
	},
	{
		id: 'opt07',
		label: 'Opción g'
	},
	{
		id: 'opt08',
		label: 'Opción h'
	},
	{
		id: 'opt09',
		label: 'Opción i'
	},
	{
		id: 'opt10',
		label: 'Opción 1j'
	},
	{
		id: 'opt11',
		label: 'Opción 1k'
	},
	{
		id: 'opt12',
		label: 'Opción 1l'
	},
	{
		id: 'opt13',
		label: 'Opción 1m'
	},
	{
		id: 'opt14',
		label: 'Opción 1n'
	},
	{
		id: 'opt15',
		label: 'Opción 1o'
	},
	{
		id: 'opt16',
		label: 'Opción 1p'
	},
	{
		id: 'opt17',
		label: 'Opción 1q'
	},
	{
		id: 'opt18',
		label: 'Opción 1r'
	}
];

export const ContextMenuExample = () => {
	const [contextMenuConfig, setContextMenuConfig] = useState({ elementId: '' });

	const click = (event) => {
		const { target } = event;
		const contextId = target.getAttribute('context-id');
		const config = filtersConfig[contextId];
		setContextMenuConfig(config);
	};

	const handleClearFilterOptionClick = () => {
		console.log(`🚀 ~ ContextMenuExample » onClearFilterOptionClick called`);
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
				<ContextMenu
					{...contextMenuConfig}
					onClearFilterOptionClick={handleClearFilterOptionClick}
					filterOptions={{ serverSide: false, items: filterOptions }}
				/>
			</section>
		</article>
	);
};

ContextMenuExample.propTypes = {
	//filterOptions: PropTypes.shape({}),
	// onLogin: PropTypes.func.isRequired,
	// onLogout: PropTypes.func.isRequired,
	// onCreateAccount: PropTypes.func.isRequired
};

ContextMenuExample.defaultProps = {
	// user: null
};

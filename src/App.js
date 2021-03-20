import React, { useState } from 'react';

import ContextMenu from './ContextMenu';
import './App.css';

import * as filterTypes from './constants';

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

function App() {
	const [contextMenuConfig, setContextMenuConfig] = useState({ elementId: '' });

	const click = (event) => {
		const { target } = event;
		const contextId = target.getAttribute('context-id');
		const config = filtersConfig[contextId];
		setContextMenuConfig(config);
	};

	const handleApplyFilterClick = (selectedItems) => {
		console.log(`🚀 ~ file: App.js ~ line 121 ~ handleApplyFilterClick ~ selectedItems »`, selectedItems);
	};

	const handleClearFilterClick = () => {
		console.log(`🚀 ~ ContextMenuExample » onClearFilterOptionClick » called`);
	};

	return (
		<div className="App">
			<div className="App-body">
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<button context-id="btn-1" onClick={click}>
						click me
					</button>
					<button context-id="btn-2" onClick={click}>
						click me
					</button>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button context-id="btn-3" onClick={click}>
						click me
					</button>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<button context-id="btn-4" onClick={click}>
						click me
					</button>
					<button context-id="btn-5" onClick={click}>
						click me
					</button>
				</div>
				<ContextMenu
					{...contextMenuConfig}
					onApplyFilterClick={handleApplyFilterClick}
					onClearFilterClick={handleClearFilterClick}
					filterOptions={{ serverSide: false, items: filterOptions }}
				/>
			</div>
		</div>
	);
}

export default App;

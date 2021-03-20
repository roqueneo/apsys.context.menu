import React from 'react';
import PropTypes from 'prop-types';

const FilterItems = (props) => {
	const { items, onFilterOptionClick } = props;

	const renderItem = ({ id, label, selected }) => {
		return (
			<div
				key={id}
				style={{ padding: '2px 10px', backgroundColor: 'lightgrey' }}
				data-id={id}
				onClick={onFilterOptionClick}
			>
				<div style={{ textAlign: 'left', cursor: 'pointer' }}>
					<input type="checkbox" checked={selected} readOnly/>
					<span style={{ display: 'inline-block', width: '5px' }} />
					<span>{label}</span>
				</div>
			</div>
		);
	};

	if (items.length === 0) {
		return null;
	}
	return (
		<div>
			<div style={{ border: '1px solid gray' }} />
			<div style={{ padding: '2px 10px', backgroundColor: 'lightgrey' }}>Searcher</div>
			<div style={{ border: '1px solid gray' }} />
			<div style={{ maxHeight: '210px', overflowY: 'auto' }}>
				{Object.values(items).map((item) => renderItem(item))}
			</div>
		</div>
	);
};

FilterItems.propTypes = {
	items: PropTypes.object.isRequired,
	onFilterOptionClick: PropTypes.func
};

FilterItems.defaultProps = {
	items: [],
	onFilterOptionClick: () => console.warn('[onFilterOptionClick] not defined!')
};

export default FilterItems;

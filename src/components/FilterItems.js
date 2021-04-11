import React from 'react';
import PropTypes from 'prop-types';
import OptionSearcher from './OptionSearcher';
import FilterItem from './FilterItem';

const FilterItems = (props) => {
	const { items, onQueryChange, onFilterOptionClick } = props;

	if (items.length === 0) {
		return null;
	}
	return (
		<div>
			<div style={{ border: '1px solid gray' }} />
			<div style={{ padding: '2px 10px', backgroundColor: 'lightgrey' }}>
				<OptionSearcher onChange={onQueryChange} />
			</div>
			<div style={{ border: '1px solid gray' }} />
			<div style={{ maxHeight: '210px', overflowY: 'auto' }}>
				{Object.values(items).map((item) => (
					<FilterItem key={item.id} {...item} onClick={onFilterOptionClick} />
				))}
			</div>
		</div>
	);
};

FilterItems.propTypes = {
	items: PropTypes.object.isRequired,
	onQueryChange: PropTypes.func,
	onFilterOptionClick: PropTypes.func
};

FilterItems.defaultProps = {
	items: [],
	onFilterOptionClick: () => console.warn('[onFilterOptionClick] not defined!')
};

export default FilterItems;

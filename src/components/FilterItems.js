import React from 'react';
import PropTypes from 'prop-types';

const FilterItems = props => {
    const { items } = props;

    if (items.length === 0) {
        return null;
    }
    return (
        <div>
            test
        </div>
    );
};

FilterItems.propTypes = {
    items: PropTypes.array
};

FilterItems.defaultProps = {
    items: []
}

export default FilterItems;
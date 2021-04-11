import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({
    id, 
    label,
    selected,
    onClick
}) => {
    return (
        <div
            style={{ padding: '2px 10px', backgroundColor: 'lightgrey' }}
            data-id={id}
            onClick={onClick}
        >
            <div style={{ textAlign: 'left', cursor: 'pointer' }}>
                <input type="checkbox" checked={selected} readOnly />
                <span style={{ display: 'inline-block', width: '5px' }} />
                <span>{label}</span>
            </div>
        </div>
    );
};

FilterItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FilterItem;
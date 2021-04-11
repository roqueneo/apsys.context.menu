import React from 'react';
import PropTypes from 'prop-types';

const OptionSearcher = props => {
    const { onChange } = props;

    return (
        <div>
            <input onChange={onChange} placeholder='Buscar'/>
        </div>
    );
};

OptionSearcher.propTypes = {
    onChange: PropTypes.func.isRequired    
};

export default OptionSearcher;
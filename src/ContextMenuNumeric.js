import React from 'react';
import PropTypes from 'prop-types';

const ContextMenuNumeric = props => {
	const { bindMenu, data, bindMenuItem, coords, setClickedCmd, hideMenu, handleMenuItemClick } = props;

	// const handleMenuItemClick = (n) => () => {
	// 	setClickedCmd(n);
    //     hideMenu();
    //     if (n==='AdvancedFilters') {
            
    //         console.log(`🚀 ~ file: ContextMenuNumeric.js ~ line 11 ~ handleMenuItemClick ~ n`, n);
    //     }
	// };
    return (
        <div {...bindMenu}>
            <div {...bindMenuItem} onClick={handleMenuItemClick('Borrar')} >Borrar filtro</div>
            <div {...bindMenuItem} onClick={handleMenuItemClick('AdvancedFilters')}>Filtros de numero</div>
            <div {...bindMenuItem} onClick={handleMenuItemClick('Buscador')} >Buscador</div>
            <div {...bindMenuItem} onClick={handleMenuItemClick('Opciones')} >Opciones</div>
            
        </div>
    );
};

ContextMenuNumeric.propTypes = {
    
};

export default ContextMenuNumeric;
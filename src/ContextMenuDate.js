import React from 'react';
import PropTypes from 'prop-types';

const ContextMenuDate = props => {
	const { bindMenu, data, bindMenuItem, coords, setClickedCmd, hideMenu } = props;

	const handleMenuItemClick = (n) => () => {
		setClickedCmd(n);
		hideMenu();
	};
    return (
        <div {...bindMenu}>
            <div {...bindMenuItem} >Borrar filtro</div>
            <div {...bindMenuItem} >Filtros de fecha</div>
            <div {...bindMenuItem} >Buscador</div>
            <div {...bindMenuItem} >Opciones</div>
        </div>
    );
};

ContextMenuDate.propTypes = {
    
};

export default ContextMenuDate;
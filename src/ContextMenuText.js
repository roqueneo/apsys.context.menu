import React from 'react';
import PropTypes from 'prop-types';

const ContextMenuText = props => {
	const { bindMenu, data, bindMenuItem, coords, setClickedCmd, hideMenu } = props;

	const handleMenuItemClick = (n) => () => {
		setClickedCmd(n);
		hideMenu();
	};

    return (
        <div {...bindMenu}>
            <div  {...bindMenuItem} >Borrar filtro</div>
            <div  {...bindMenuItem} >Filtros de texto</div>
            <div  {...bindMenuItem} >Buscador</div>
            <div  {...bindMenuItem} >Opciones</div>
        </div>
    );
};

ContextMenuText.propTypes = {
    
};

export default ContextMenuText;
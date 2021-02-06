import React from 'react';
import PropTypes from 'prop-types';

const SubMenu = props => {
    const { bindMenu, data, bindMenuItem, coords, setClickedCmd, hideMenu } = props;
    
    return (
        <div {...bindMenu}>
            <div {...bindMenuItem} >Borrar filtro</div>
            <div {...bindMenuItem} >Filtros de numero</div>
            <div {...bindMenuItem} >Buscador</div>
            <div {...bindMenuItem} >Opciones</div>
            
        </div>
    );
};

SubMenu.propTypes = {
    
};

export default SubMenu;
import React from 'react';
import Menu from './Menu';


const MenuList = ( props ) => (
  
  <div> 
    { props.menus.map( menu => ( 
      <Menu key={menu.id}
      {...menu}
      />
      )
      )}
  </div>
)

export default MenuList;
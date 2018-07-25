import React from 'react'
import user from 'admin-lte/dist/img/user2-160x160.jpg'
import MenuTree from './menutree'
import MenuItem from './menuitem'

export default props => (

    <aside className="main-sidebar">
    
    <section className="sidebar">
      
      
      
      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">MAIN NAVIGATION</li>
       
        <MenuTree name='Dashboard' icon='dashboard'>
          <MenuItem name='Dashboard 1' icon='circle-o' />
          <MenuItem name='Dashboard 2' icon='circle-o' />
        </MenuTree>
        <MenuTree name='P1' icon='edit'>
          <MenuItem name='Ofícios' icon='circle-o' />
          <MenuItem name='Tipos de Ofício' icon='circle-o' />
        </MenuTree>
        <MenuTree name='P3' icon='edit'>
          <MenuItem name="OPE's" icon='circle-o' />
          <MenuItem name="Tipos de OPE's" icon='circle-o' />
        </MenuTree>
         <MenuTree name='ADM' icon='edit'>
          <MenuItem name='Dados Gerais' icon='circle-o' />
          <MenuItem name="Usuários" icon='circle-o' />
        </MenuTree>
        
      </ul>
    </section>
   
  </aside>
)
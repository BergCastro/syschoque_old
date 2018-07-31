import React from 'react'
import user from 'admin-lte/dist/img/user2-160x160.jpg'
import MenuTree from './menutree'
import MenuItem from './menuitem'

export default props => (

    <aside className="main-sidebar">
    
    <section className="sidebar">
      
      
      
      <ul className="sidebar-menu tree" data-widget="tree">
        <li className="header"></li>
       
        <MenuTree name='Dashboard' icon='dashboard'>
          <MenuItem path='/' name='Dashboard 1' icon='circle-o' />
          <MenuItem path='/' name='Dashboard 2' icon='circle-o' />
        </MenuTree>
        <MenuTree name='P1' icon='edit'>
          <MenuItem path='/oficios' name='Ofícios' icon='circle-o' />
          <MenuItem path='/oficios' name='Tipos de Ofício' icon='circle-o' />
        </MenuTree>
        <MenuTree name='P3' icon='edit'>
          <MenuItem path='/oficios' name="OPE's" icon='circle-o' />
          <MenuItem path='/oficios' name="Tipos de OPE's" icon='circle-o' />
        </MenuTree>
         <MenuTree name='ADM' icon='edit'>
          <MenuItem path='/usuarios' name='Dados Gerais' icon='circle-o' />
          <MenuItem path='/usuarios' name="Usuários" icon='circle-o' />
        </MenuTree>
        
      </ul>
    </section>
   
  </aside>
)
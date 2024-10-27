import React from 'react';

import trident from 'src/asset/trident.svg?url';
import Trident from 'src/asset/trident.svg';
import {Container, Header, Image, MyNavLink,  Menu, MenuItem} from './style';

export const MenuComponent: React.FC = () => <Menu> 
  <MyNavLink to='/'> 
    {({isActive }) => (
      <MenuItem $active={isActive}>Home</MenuItem>
    )}
  </MyNavLink>
  <MyNavLink to='/about'> 
    {({isActive }) => (
      <MenuItem $active={isActive}>About</MenuItem>
    )}
  </MyNavLink>
  <MyNavLink to='/contact'> 
    {({isActive }) => (
      <MenuItem $active={isActive}>Contact</MenuItem>
    )}
  </MyNavLink>
</Menu>;

const Application: React.FC = () => <Container>
  <Header>This is simple react app</Header>
  <br/>
  Svgr: svg as react component:
  <Trident height='1.5rem'/>
  <br/>
  Svgr: svg as url:
  <Image src={trident}/>
</Container>;

export default Application;

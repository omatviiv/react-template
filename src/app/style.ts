import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Header = styled.h1`
  color: darkblue;
`;

export const Image = styled.img`
  width: 1.5rem;
  color: yellow;
  background: lightgrey;
`;

export const MyNavLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    background: #57786B;
  }


`;

export const Menu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #57786B;
`;
type MenuItemProps = {
  $active?: boolean;
};

export const MenuItem = styled.div<MenuItemProps>`
  margin: 0 0.5rem;
  font-family: Courier New;
  font-weight: bold;
  color: ${pr => pr.$active ? 'yellow' : '#FABD2F'};
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

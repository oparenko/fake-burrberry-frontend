import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`text-align: center;`;

const activeClassName = 'nav-item-active';

const NavItem = styled(NavLink).attrs({
  activeClassName,
})`
  display: inline-block;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: calc(1rem - 1px);
  padding-left: 1rem;
  font-family: Raleway, 'Helvetica Neue', Helvetica, Arial;
  font-size: .75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 1.5px;
  color: #999999;
  text-transform: uppercase;
  text-decoration: none;

  &.${activeClassName} {
    color: #171717;
    border-bottom: 1px solid #171717;
  }
`;

export default function () {
  return (
    <Wrapper>
      <NavItem to="/products/women/">Women</NavItem>
      <NavItem to="/products/men">Men</NavItem>
      <NavItem to="/products/children/">Children</NavItem>
      <NavItem to="/products/beauty/">Beauty</NavItem>
      <NavItem to="/products/experience/">Experience</NavItem>
    </Wrapper>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`text-align: center;`;

const LinkStyled = styled(NavLink)`
  display: inline-block;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: calc(1rem - 1px);
  padding-left: 1rem;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: .75rem;
  line-height: 1rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${props => (props.active ? '#171717' : '#999999')};
  border-bottom: 1px solid transparent;
  border-bottom-color: ${props => (props.active ? '#171717' : 'transparent')};
`;

export default function () {
  return (
    <Wrapper>
      <LinkStyled to="/products/women/">Women</LinkStyled>
      <LinkStyled active to="/products/men">
        Men
      </LinkStyled>
      <LinkStyled to="/products/children/">Children</LinkStyled>
      <LinkStyled to="/products/beauty/">Beauty</LinkStyled>
      <LinkStyled to="/products/experience/">Experience</LinkStyled>
    </Wrapper>
  );
}

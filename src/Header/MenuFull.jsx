import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`text-align: center;`;

const LinkStyled = styled(Link)`
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
      <LinkStyled to="">Women</LinkStyled>
      <LinkStyled active to="/products/men">
        Men
      </LinkStyled>
      <LinkStyled to="">Children</LinkStyled>
      <LinkStyled to="">Beauty</LinkStyled>
      <LinkStyled to="">Experience</LinkStyled>
    </Wrapper>
  );
}

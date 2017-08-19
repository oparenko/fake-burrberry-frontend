import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MaxSmall, MinMedium } from '../Common/Breakpoints';
import MenuFull from './MenuFull';
import logo from './logo.svg';
import hamburger from './hamburger.svg';
import arrow from './arrow.svg';

const Header = styled.header`
  padding-top: 1.125rem;
  padding-bottom: 1.125rem;

  @media screen and (min-width: 48rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media screen and (min-width: 62rem) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0;
  }
`;

const Logo = styled.img`
  display: block;
  text-align: center;
  margin: auto;
  height: .75rem;

  @media screen and (min-width: 48rem) {
    height: 1rem;
  }
`;

const LinkStyled = styled(Link)`
  text-align: center;
  line-height: 0;
`;

const Menu = styled.button`
  position: absolute;
  text-indent: -9999px;
  background: url(${hamburger});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1rem .625rem;
  width: 1rem;
  height: .75rem;
  border: 0;
`;

const Location = styled.button`
  position: absolute;
  padding: 0;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: .75rem;
  line-height: 1rem;
  color: #999999;
  background: transparent;
  border: none;
  outline: none;

  &:after {
    content: '';
    display: inline-block;
    background-image: url(${arrow});
    background-size: 12px 6px;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
  }
`;

export default () =>
  (<div>
    <Header>
      <div className="container">
        <MaxSmall>
          <Menu type="button">Menu</Menu>
        </MaxSmall>
        <MinMedium>
          <Location type="button">Shopping in: United Kingdom (£)</Location>
        </MinMedium>
        <LinkStyled to="/">
          <Logo src={logo} alt="Burrberry Logo" />
        </LinkStyled>
      </div>
    </Header>
    <MinMedium>
      <MenuFull />
    </MinMedium>
  </div>);

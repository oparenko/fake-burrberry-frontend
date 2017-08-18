import React from 'react';
import styled from 'styled-components';
import { MaxSmall, MinMedium } from '../Common/Breakpoints';
import MenuFull from './MenuFull';
import logo from './logo.svg';
import hamburger from './hamburger.svg';
import arrow from './arrow.svg';

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Link = styled.a`
  text-align: center;
  line-height: 0;
`;

const Logo = styled.img`
  height: .75rem;

  @media screen and (min-width: 48rem) {
    height: 1rem;
  }
`;

const Menu = styled.img`
  position: absolute;
  left: .5rem;
`;

const Location = styled.button`
  position: absolute;
  left: .5rem;
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
  (<header>
    <MainHeader>
      <MaxSmall>
        <Menu src={hamburger} alt="Menu icon" />
      </MaxSmall>
      <MinMedium>
        <Location type="button">Shopping in: United Kingdom (£)</Location>
      </MinMedium>
      <Link href="/">
        <Logo src={logo} alt="Burrberry Logo" />
      </Link>
    </MainHeader>
    <MinMedium>
      <MenuFull />
    </MinMedium>
  </header>);

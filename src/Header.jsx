import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import hamburger from './hamburger.svg';

const Header = styled.header`
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

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () =>
  (<Header>
    <Menu src={hamburger} alt="Menu icon" />
    <Link href="/">
      <Logo src={logo} alt="Burrberry Logo" />
    </Link>
  </Header>);

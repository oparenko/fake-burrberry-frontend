import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MaxSmall, MinMedium } from '../Common/Breakpoints';
import MenuFull from './MenuFull';
import CountryPicker from './CountryPicker';
import logo from './logo.svg';
import hamburger from './hamburger.svg';

const StyledHeader = styled.header`
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

export const Logo = styled.img`
  display: block;
  text-align: center;
  margin: auto;
  height: .75rem;

  @media screen and (min-width: 48rem) {
    height: 1rem;
  }
`;

export const LinkStyled = styled(Link)`
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

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <StyledHeader>
          <div className="container">
            <MaxSmall>
              <Menu type="button" onClick={this.props.handleMenuOpen}>
                Menu
              </Menu>
            </MaxSmall>
            <MinMedium>
              <CountryPicker />
            </MinMedium>
            <LinkStyled to="/">
              <Logo src={logo} alt="Burrberry Logo" />
            </LinkStyled>
          </div>
        </StyledHeader>
        <MinMedium>
          <MenuFull />
        </MinMedium>
      </div>
    );
  }
}

Header.propTypes = {
  handleMenuOpen: PropTypes.func.isRequired,
};

export default Header;

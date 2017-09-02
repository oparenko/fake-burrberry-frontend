import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import arrow from '../../Icons/arrow.svg';

const Button = styled.button`
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  background-color: transparent;
  border: none;
  text-align: left;
  position: relative;
  display: flex;
  padding: 1.5rem 1.25rem 1.5rem 0;
  margin-right: 1rem;
  align-items: center;
  color: ${props => (props.isFilterOpened ? '#999' : '#171717')};
  white-space: nowrap;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    background-image: url(${arrow});
    background-size: cover;
    width: 0.75rem;
    height: 0.375rem;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    opacity: ${props => (props.isFilterOpened ? '.3' : '1')};
  }

  ${props =>
    props.isActive &&
    css`
      color: #171717;
      &::after {
        opacity: 1;
        transform: translateY(-50%) rotate(180deg);
      }
    `};

  @media screen and (min-width: 48rem) {
    margin-right: 3rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const FilterStyled = styled.div`@media screen and (min-width: 48rem) {position: relative;}`;

const Content = styled.div`
  background-color: #f3f3f3;
  position: absolute;
  top: 100%;
  padding: 1rem 0.5rem 1.5rem;
  z-index: 20;
  line-height: 1rem;
  font-family: 'Raleway', 'Helvetica Neue', Helvetica, Arial;
  font-size: 0.75rem;
  left: -.5rem;
  right: 0;
  display: ${props => (props.active ? 'block' : 'none')};

  @media screen and (min-width: 48rem) {
    padding: 1rem 1.5rem 1.5rem;
    white-space: nowrap;
    left: ${props => (props.right ? 'auto' : '-.5rem')};
    right: ${props => (props.right ? '-.5rem' : 'auto')};
  }

  @media screen and (min-width: 62rem) {
    left: ${props => (props.right ? 'auto' : '-1.5rem')};
    right: ${props => (props.right ? '-1.5rem' : 'auto')};
  }
`;

class Filter extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  state = {
    isActive: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick, true);
  }

  toggle = (on = true) => {
    if (this.state.isActive !== on || on) {
      this.setState(
        prevState => ({ isActive: !prevState.isActive }),
        () => this.props.onClick(this.state.isActive),
      );
    }
  };

  handleOutsideClick(e) {
    if (this.node && !this.node.contains(e.target)) {
      this.toggle(false);
    }
  }

  render() {
    return (
      <FilterStyled>
        <div
          ref={(node) => {
            this.node = node;
          }}
        >
          <Button
            type="button"
            isActive={this.state.isActive}
            isFilterOpened={this.props.isFilterOpened}
            onClick={this.toggle}
          >
            {this.props.title}
          </Button>
          <Content active={this.state.isActive} right={this.props.right}>
            {this.props.children}
          </Content>
        </div>
      </FilterStyled>
    );
  }
}

Filter.defaultProps = {
  right: false,
  isFilterOpened: false,
};

Filter.propTypes = {
  right: PropTypes.bool,
  isFilterOpened: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Filter;

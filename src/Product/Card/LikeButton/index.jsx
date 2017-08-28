import React, { Component } from 'react';
import styled from 'styled-components';
import Heart from './Heart';

const Button = styled.button`
  align-self: flex-start;
  margin-left: 1rem;
  padding: 0;
  font-size: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
    }));
  }

  render() {
    return (
      <Button type="button" title={this.label} onClick={this.handleClick}>
        {this.label}
        <Heart isLiked={this.state.isLiked} />
      </Button>
    );
  }
}

import React, { Component } from 'react';
import styled from 'styled-components';
import Divider from './Divider.jsx';
import triangle from './triangle.svg';

const Wrapper = styled.section`
  padding: 0;

  @media screen and (min-width: 48rem) {
    display: ${props => (props.displayedMd ? 'block' : 'none')};
    padding-top: 1.5rem;
  }
`;

const Button = styled.button`
  padding-top: 2rem;
  padding-right: .5rem;
  padding-bottom: 2rem;
  padding-left: .5rem;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;

  @media screen and (min-width: 48rem) {
    padding: 0;
    line-height: 1.25rem;
  }
`;

const Title = styled.h2`
  padding: 0;
  margin: 0;
  position: relative;
  display: inline-block;
  text-align: left;
  width: 100%;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.25rem;
  color: #171717;

  &:after {
    position: absolute;
    top: 5px;
    right: 0;
    height: 10px;
    width: 10px;
    content: "";
    background: url(${triangle}) no-repeat;
    transform: rotate( ${props => (props.isOpened ? '180deg' : '0deg')} );

    @media screen and (min-width: 48rem) {
      display: none;
    }
  }
`;

const Content = styled.div`
  margin-bottom: 2rem;
  font-family: "Lora", serif;
  font-size: .875rem;
  line-height: 1.5rem;
  color: #171717;
  display: ${props => (props.isOpened ? 'block' : 'none')};

  @media screen and (min-width: 48rem) {
    margin-top: 1rem;
    margin-bottom: 0;
  }

  p, ul {
    margin: 0;
    padding-top: 0;
    padding-right: .5rem;
    padding-bottom: 0;
    padding-left: .5rem;
    list-style-type: none;

    @media screen and (min-width: 48rem) {
      padding: 0;
    }
  }
`;

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: this.props.isOpened,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <Wrapper displayedMd={this.props.displayedMd}>
        <Button onClick={this.handleClick}>
          <Title isOpened={this.state.isOpened}>{this.props.name}</Title>
        </Button>
        <Content isOpened={this.state.isOpened}>
          {this.props.children}
        </Content>
        <Divider />
      </Wrapper>
    );
  }
}

export default Accordion;

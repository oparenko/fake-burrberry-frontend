import React, { Component } from 'react';
import styled from 'styled-components';

const StyledColors = styled.section`
  margin-top: 1rem;
  margin-right: .5rem;
  margin-left: .5rem;

  @media screen and (min-width: 48rem) {
    margin-right: 0;
    margin-left: 0;
  }

  @media screen and (min-width: 62rem) {
    display: inline-block;
    margin-top: 0;
  }
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #171717;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
`;

const Selection = styled.strong`font-weight: bold;`;

const Wrapper = styled.div`display: flex;`;

const Button = styled.button`
  display: inline-block;
  overflow: hidden;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  white-space: nowrap;
  text-indent: -9999px;
  background: ${props => props.hex};
  border: solid 1px ${props => (props.isActive ? '#232122' : 'transparent')};
  border-radius: 50%;
  line-height: 1;
  cursor: pointer;
`;

const Divider = styled.hr`
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 1px;
  background: #c6c6c6;
  border: 0;

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

class Colors extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    colors: [{ name: 'Honey', hex: '#cfa880' }, { name: 'Black', hex: '#272727' }],
    selectedColor: 'Honey',
  };

  handleClick(e) {
    this.setState({ selectedColor: e.target.name });
  }

  render() {
    const selectedColor = this.state.selectedColor;

    const colors = this.state.colors.map((color, key) => {
      const isActive = this.state.selectedColor === color.name;

      return (
        <Button
          key={key.toString()}
          type="button"
          onClick={this.handleClick}
          isActive={isActive}
          name={color.name}
          hex={color.hex}
        >
          Select {color.name}
        </Button>
      );
    });

    return (
      <StyledColors>
        <Description>
          Colour: <Selection>{selectedColor}</Selection>
        </Description>
        <Wrapper>
          {colors}
        </Wrapper>
        <Divider />
      </StyledColors>
    );
  }
}

export default Colors;

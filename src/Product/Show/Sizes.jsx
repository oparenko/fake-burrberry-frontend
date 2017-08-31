import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSizes = styled.div`
  display: none;

  @media screen and (min-width: 62rem) {
    display: inline-block;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    margin-left: 8.5rem;
    padding: 0;
  }
`;

const Header = styled.div`
  width: 14.5rem;
  display: flex;
  justify-content: space-between;
`;

const SelectedSize = styled.p`
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: .75rem;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  line-height: 1rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    padding: 0;
  }
`;

const Selection = styled.strong`font-weight: bold;`;

const Options = styled.div`
  margin: 0;
  margin-top: 1rem;
  padding: 0;
`;

const RadioButton = styled.button`
  display: inline-block;
  margin: 0;
  margin-right: .5rem;
  padding-top: .5rem;
  padding-right: 1rem;
  padding-bottom: .5rem;
  padding-left: 1rem;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  line-height: 1rem;
  text-align: center;
  color: #171717;
  background: transparent;
  border-radius: .125rem;
  border: none;
  box-shadow: inset 0px 0px 0px 1px #171717;
  cursor: pointer;
`;

const Help = styled.button`
  display: inline-block;
  margin: 0;
  padding: 0;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  text-align: center;
  text-transform: uppercase;
  line-height: 1rem;
  color: #171717;
  background: transparent;
  border: none;
  cursor: pointer;
`;

class Sizes extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    sizes: ['S', 'M', 'L', 'XL'],
    selectedSize: 'XL',
  };

  handleClick(e) {
    this.setState({ selectedSize: e.target.value });
  }

  render() {
    const selectedSize = this.state.selectedSize;

    const buttons = this.state.sizes.map((size, key) => {
      const isActive = this.state.selectedSize === size;

      return (
        <RadioButton
          key={key.toString()}
          small
          type="button"
          onClick={this.handleClick}
          isActive={isActive}
          value={size}
        >
          {size}
        </RadioButton>
      );
    });

    return (
      <StyledSizes>
        <Header>
          <SelectedSize>
            Size: <Selection>{selectedSize}</Selection>
          </SelectedSize>
          <Help type="button">Need size help?</Help>
        </Header>
        <Options>
          {buttons}
        </Options>
      </StyledSizes>
    );
  }
}

export default Sizes;

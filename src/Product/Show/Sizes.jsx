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

const sizes = ['S', 'M', 'L', 'XL'];

class Sizes extends Component {
  constructor(props) {
    super(props);
    this.state = { selectSizeIndex: 0 };
    this.onActiveSize = this.onActiveSize.bind(this);
  }

  onActiveSize(e) {
    const id = Number(e.target.id);
    this.setState({ selectSizeIndex: id });
  }

  render() {
    return (
      <StyledSizes>
        <Header>
          <SelectedSize>
            Size: <Selection>{sizes[this.state.selectSizeIndex]}</Selection>
          </SelectedSize>
          <Help type="button">Need size help?</Help>
        </Header>
        <Options>
          {sizes.map((size, index) =>
            (<RadioButton
              id={index}
              name={size}
              type="button"
              onClick={e => this.onActiveSize(e)}
              isActive={this.state.selectSizeIndex === index}
              key={index.toString()}
            >
              {size}
            </RadioButton>),
          )}
        </Options>
      </StyledSizes>
    );
  }
}

export default Sizes;

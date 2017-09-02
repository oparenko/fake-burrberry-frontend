import React, { Component } from 'react';
import styled from 'styled-components';
import arrow from '../Icons/arrow.svg';

const StyledCountry = styled.button`
  font-family: 'Raleway', Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  text-align: left;
  border: none;
  background-color: transparent;
  padding: 0;
  color: #999;
  display: none;
  position: absolute;
  cursor: pointer;

  @media screen and (min-width: 48rem) {
    display: flex;
    align-items: center;
  }
`;

const Choosen = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
`;

const Arrow = styled.img`
  width: 12px;
  height: 6px;
  margin-left: 0.5rem;
`;

const Select = styled.select`
  opacity: 0;
  position: absolute;
  left: 0;
  width: 100%;
  cursor: pointer;
`;

const countries = ['United Kingdom (£)', 'Russian Federation (₽)'];

class CountryPicker extends Component {
  state = {
    selectedCountry: 0,
  };

  render() {
    const handleSelect = (e) => {
      this.setState({
        selectedCountry: e.target.selectedIndex,
      });
    };

    return (
      <StyledCountry>
        Shopping in:&nbsp;
        <Choosen>{countries[this.state.selectedCountry]}</Choosen>
        <Arrow src={arrow} />
        <Select onChange={handleSelect}>
          {countries.map(option =>
            (<option selectedCountry={option} key={option}>
              {option}
            </option>),
          )}
        </Select>
      </StyledCountry>
    );
  }
}

export default CountryPicker;

import React from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  margin-right: -.5rem;
  white-space: nowrap;
  align-items: center;
  overflow-x: scroll;
  display: flex;

  @media screen and (min-width: 48rem) {
    margin-right: 0;
  }
`;

const Filters = styled.div`display: flex;`;

const Dropdown = styled.button`
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  background-color: transparent;
  border: none;
  text-align: left;
  position: relative;
  display: flex;
  padding: 0;
  align-items: center;

  & + & {
    margin-left: 1rem;
  }

  &:after {
    margin-top: 1px;
    margin-left: .5rem;
    content: '';
    display: inline-block;
    background-image: url(${arrow});
    background-repeat: none;
    background-size: cover;
    width: 12px;
    height: 6px;
  }

  @media screen and (min-width: 48rem) {
    & + & {
      margin-left: 3rem;
    }
  }
`;

const SortBy = styled.div`
  margin-left: 1rem;
  padding-right: .5rem;

  @media screen and (min-width: 48rem) {
    margin-left: 0;
    padding-right: 0;
  }
`;

export default () =>
  (<Wrapper>
    <Filters>
      <Dropdown>Category</Dropdown>
      <Dropdown>Colour</Dropdown>
      <Dropdown>Size</Dropdown>
    </Filters>
    <SortBy>
      <Dropdown>Sort by price</Dropdown>
    </SortBy>
  </Wrapper>);

import React from 'react';
import styled from 'styled-components';
import arrow from './arrow.svg';

const Wrapper = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  padding-bottom: 1.5rem;
  margin-right: -.5rem;
`;

const Title = styled.h4`
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  font-weight: 400;
  margin-top: 0;
  margin-right: 2rem;
  margin-bottom: 0;
  margin-left: 0;
`;

const Filters = styled.div`
  overflow-x: scroll;
  display: flex;
`;

const Filter = styled.button`
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 1rem;
  background-color: transparent;
  border: none;
  text-align: left;
  position: relative;
  display: flex;
  padding: 0;
  margin-right: 1rem;
  align-items: center;

  &:after {
    content: '';
    display: inline-block;
    background-image: url(${arrow});
    background-size: 12px 6px;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
  }
`;

export default () =>
  (<Wrapper>
    <Title>Refine by</Title>
    <Filters>
      <Filter>Category</Filter>
      <Filter>Colour</Filter>
      <Filter>Size</Filter>
      <Filter>Sort by price</Filter>
    </Filters>
  </Wrapper>);

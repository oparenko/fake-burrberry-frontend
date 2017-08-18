import React from 'react';
import styled from 'styled-components';
import { MaxSmall } from '../../../Common/Breakpoints';
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
    margin-right: 1rem;
  }

  &:after {
    content: '';
    display: inline-block;
    background-image: url(${arrow});
    background-size: 12px 6px;
    width: 12px;
    height: 6px;
    margin-left: .5rem;
  }

  @media screen and (min-width: 48rem) {
    & + & {
      margin-left: 3rem;
    }
  }
`;

export default () =>
  (<Wrapper>
    <Filters>
      <MaxSmall>
        <Title>Refine by</Title>
      </MaxSmall>
      <Dropdown>Category</Dropdown>
      <Dropdown>Colour</Dropdown>
      <Dropdown>Size</Dropdown>
    </Filters>
    <div>
      <Dropdown>Sort by Price</Dropdown>
    </div>
  </Wrapper>);

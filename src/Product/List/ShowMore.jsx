import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 48rem) {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }
`;

const Showing = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: "Lora", Helvetica, Arial, serif;
  font-size: 1rem;
  line-height: 1.1875rem;
  font-weight: 400;

  @media screen and (min-width: 48rem) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`;

const Button = styled.button`
  font-family: "Raleway", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: .75em;
  line-height: 1rem;
  padding-top: 1rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border: 1px solid #171717;
  border-radius: 2px;
  background-color: #fff;
  color: #171717;
`;

export default () =>
  (<Wrapper>
    <Showing>Showing 8 of 17</Showing>
    <Button type="button">View 9 more</Button>
  </Wrapper>);

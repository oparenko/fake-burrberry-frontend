import React from 'react';
import styled from 'styled-components';

const More = styled.section`
  margin-top: 1rem;
  margin-right: .5rem;
  margin-left: .5rem;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const Title = styled.h2`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 1.5rem;
  padding-bottom: 8px;
  text-transform: uppercase;
  border-bottom: 1px solid #171717;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
`;

const Link = styled.a`
  display: block;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #171717;
  font-family: "Lora", "Times New Roman", serif;
  font-size: .875rem;
  font-style: italic;
  line-height: 1.0625rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default () => (
  <More>
    <Title>More for you</Title>
    <Link href="#">Men’s Black Trench Coats</Link>
    <Link href="#">Men’s Short Trench Coats</Link>
    <Link href="#">Men’s Long Trench Coats</Link>
  </More>
);

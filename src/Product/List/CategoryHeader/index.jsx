import React from 'react';
import styled from 'styled-components';
import Filters from './Filters';

const Wrapper = styled.div`
  margin-bottom: 2rem;
  background-color: #f3f3f3;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-family: "Lora", "Times New Roman", serif;
  font-size: 1.625rem;
  font-weight: 400;
  line-height: 2rem;
  color: #171717;
`;

const Description = styled.p`
  margin: 0;
  padding-bottom: 2rem;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #171717;
  opacity: 0.87;
`;

export default () =>
  (<Wrapper>
    <div className="container">
      <Title>Men&apos;s Clothing</Title>
      <Description>
        Explore our menswear collection for the season. Sculptural knitwear, sweatshirts, artist
        overalls and oversized cabans feature alongside our signature trench coat in both heritage.
      </Description>
      <Filters />
    </div>
  </Wrapper>);

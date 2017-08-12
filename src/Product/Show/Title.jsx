import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin-top: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  margin-left: .5rem;
  font-family: "Lora", "Times New Roman", serif;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5rem;

  @media screen and (min-width: 48rem) {
    margin-top: 1.5rem;
    margin-right: 0;
    margin-bottom: 1.5rem;
    margin-left: 0;
    font-size: 1.5rem;
    line-height: 1.75rem;
  }

  @media screen and (min-width: 62rem) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export default () => (
  <Title>
    Long Cotton Gabardine Car Coat
  </Title>
);

import React from 'react';
import styled from 'styled-components';

const Divider = styled.hr`
  margin-top: 2rem;
  margin-right: -50vw;
  margin-bottom: 2rem;
  margin-left: -50vw;
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
  height: 1px;
  background-color: #c6c6c6;
  border: none;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default () => (
  <Divider />
);

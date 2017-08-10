import React from 'react';
import styled from 'styled-components';
import Colors from './Colors.jsx';
import Actions from './Actions.jsx';
import Divider from './Divider.jsx';

const Metadata = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1rem;
  margin-right: .5rem;
  margin-bottom: 1rem;
  margin-left: .5rem;

  font-family: "Raleway", Helvetica, Arial, sans-serif;
  line-height: 0;

  @media screen and (min-width: 48rem) {
    margin: 0;
  }
`;

const Price = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.1875rem;
`;

const Id = styled.p`
  margin: 0;

  color: #171717;

  font-size: .75rem;
  font-weight: normal;
  line-height: 1rem;
`;

export default () => (
  <div className="col-xs-12 col-md-5">
    <Metadata>
      <Price>110 000 руб.</Price>
      <Id>Item 39428531</Id>
    </Metadata>
    <Colors />
    <Actions />
    <Divider />
  </div>
);

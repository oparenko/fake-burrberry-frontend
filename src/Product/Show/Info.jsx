import React from 'react';
import styled from 'styled-components';
import { IntlProvider, FormattedNumber } from 'react-intl';

import Title from './Title';
import Colors from './Colors';
import Sizes from './Sizes';
import Actions from './Actions';
import Divider from './Divider';

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

  @media screen and (min-width: 62rem) {
    margin-top: .5rem;
    font-weight: 500;
  }
`;

const Id = styled.p`
  margin: 0;
  color: #171717;
  font-size: .75rem;
  font-weight: normal;
  line-height: 1rem;

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

const Appearance = styled.div`
  @media screen and (min-width: 62rem) {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    display: flex;
  }
`;

const FreeDelivery = styled.div`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    margin-top: 1.5rem;
  }
`;

const Subtitle = styled.h3`
  margin: 0 0 .25rem 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  line-height: .875rem;
`;

const Content = styled.p`
  margin: 0;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  line-height: 1rem;
`;

export default () => (
  <div>
    <Metadata>
      <Price>
        <FormattedNumber
          value={110000}
          style="currency"
          currency="RUB"
          currencyDisplay="symbol"
          minimumFractionDigits={0}
        />
      </Price>
      <Id>Item 39428531</Id>
    </Metadata>
    <Appearance>
      <Colors />
      <Sizes />
    </Appearance>
    <Actions />
    <FreeDelivery>
      <Subtitle>Free Next Day Delivery</Subtitle>
      <Content>Order before 7pm Monday to Thursday for delivery the next day</Content>
    </FreeDelivery>
    <Divider />
  </div>
);

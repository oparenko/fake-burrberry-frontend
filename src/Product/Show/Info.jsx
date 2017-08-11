import React from 'react';
import styled from 'styled-components';
import { IntlProvider, FormattedNumber } from 'react-intl';

import Colors from './Colors';
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
`;

const Id = styled.p`
  margin: 0;

  color: #171717;

  font-size: .75rem;
  font-weight: normal;
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
    <Colors />
    <Actions />
    <Divider />
  </div>
);
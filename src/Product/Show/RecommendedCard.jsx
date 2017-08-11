import React from 'react';
import styled from 'styled-components';
import { IntlProvider, FormattedNumber } from 'react-intl';

const Card = styled.a`
  display: block;
  padding-bottom: 2rem;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

const Title = styled.h3`
  margin-top: .5rem;
  margin-bottom: .5rem;
  color: #111;
  font-family: "Lora", "Times New Roman", serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1875rem;
`;

const Price = styled.h5`
  margin: 0;
  color: #999;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: .875rem;
`;

export default (props) => (
  <Card href="#" title={props.title}>
    <Image src={`/img/${props.photo}.jpg`} alt={props.title} />
    <Title>
      {props.title}
    </Title>
    <Price>
      <FormattedNumber
        value={props.price}
        style="currency"
        currency="RUB"
        currencyDisplay="symbol"
        minimumFractionDigits={0}
      />
    </Price>
  </Card>
);

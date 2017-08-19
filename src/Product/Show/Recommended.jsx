/* eslint-disable react/style-prop-object */

import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';

const Recommended = styled.section`
  margin-top: 3rem;
  margin-right: .5rem;
  margin-left: .5rem;

  @media screen and (min-width: 48rem) {
    margin-top: 1.5rem;
    margin-right: 0;
    margin-bottom: 2rem;
    margin-left: 0;
  }

  @media screen and (min-width: 48rem) {
    margin-top: 4rem;
  }
`;

const Title = styled.h2`
  display: inline-block;
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 1rem;
  margin-left: 0;
  vertical-align: baseline;
  text-transform: uppercase;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19;

  @media screen and (min-width: 62rem) {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

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

const Name = styled.h3`
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

export default () =>
  (<Recommended>
    <Title>We recommend</Title>
    <Cards>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card>
            <Image
              src={`${process.env.PUBLIC_URL}/img/Embroided-Hooded.jpg`}
              alt="Embroided Hooded"
            />
            <Name>Embroided Hooded Content For Three Lines</Name>
            <Price>
              <FormattedNumber
                value={27000}
                style="currency"
                currency="RUB"
                currencyDisplay="symbol"
                minimumFractionDigits={0}
              />
            </Price>
          </Card>
        </div>
        <div className="col-xs-6 col-md-3">
          <Card>
            <Image
              src={`${process.env.PUBLIC_URL}/img/Relaxed-Fit-Stretch-Jeans.jpg`}
              alt="Relaxed Fit Stretch Jeans"
            />
            <Name>Relaxed Fit Stretch Jeans Content For Three Lines</Name>
            <Price>
              <FormattedNumber
                value={22500}
                style="currency"
                currency="RUB"
                currencyDisplay="symbol"
                minimumFractionDigits={0}
              />
            </Price>
          </Card>
        </div>
        <div className="col-xs-6 col-md-3">
          <Card>
            <Image
              src={`${process.env.PUBLIC_URL}/img/Leather-and-House-Check.jpg`}
              alt="Leather and House Check"
            />
            <Name>Leather and House Check Content For Three Lines</Name>
            <Price>
              <FormattedNumber
                value={12000}
                style="currency"
                currency="RUB"
                currencyDisplay="symbol"
                minimumFractionDigits={0}
              />
            </Price>
          </Card>
        </div>
        <div className="col-xs-6 col-md-3">
          <Card>
            <Image
              src={`${process.env.PUBLIC_URL}/img/Leather-Wingtip-Check.jpg`}
              alt="Leather Wingtip Check"
            />
            <Name>Leather Wingtip Check Content For Three Lines</Name>
            <Price>
              <FormattedNumber
                value={46000}
                style="currency"
                currency="RUB"
                currencyDisplay="symbol"
                minimumFractionDigits={0}
              />
            </Price>
          </Card>
        </div>
      </div>
    </Cards>
  </Recommended>);

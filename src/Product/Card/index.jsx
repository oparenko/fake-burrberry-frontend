/* eslint-disable react/style-prop-object */

import React from 'react';
import styled from 'styled-components';
import { FormattedNumber } from 'react-intl';
import like from './like.svg';

const Card = styled.a`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
`;

const Metadata = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Description = styled.div`width: calc(100% - .875rem);`;

const Image = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

const Label = styled.p`
  margin: 0;
  color: #171717;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
`;

const Name = styled.h3`
  margin-top: .5rem;
  margin-bottom: .5rem;
  color: #171717;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 600;
  line-height: 1rem;
`;

const Price = styled.h5`
  margin: 0;
  color: #171717;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
`;

const Availability = styled.p`
  margin-top: 0;
  margin-bottom: .25rem;
  color: #171717;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
`;

const Like = styled.button`
  white-space: nowrap;
  text-indent: -9999px;
  background: url(${like});
  background-repeat: no-repeat;
  background-position: center;
  background-size: .875rem .875rem;
  width: .875rem;
  height: .875rem;
  border: 0;
`;

export default () =>
  (<Card href="{item.href}">
    <Image
      src="https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&wid=556&hei=742"
      alt=""
    />
    <Metadata>
      <Description>
        <Label>Relaxed fit</Label>
        <Name>The Westminster – Long Heritage Trench Coat</Name>
        <Availability>Available in 3 colours</Availability>
        <Price>
          <FormattedNumber
            value={1350}
            style="currency"
            currency="RUB"
            currencyDisplay="symbol"
            minimumFractionDigits={0}
          />
        </Price>
      </Description>
      <Like type="button">Like</Like>
    </Metadata>
  </Card>);

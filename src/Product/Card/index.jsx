/* eslint-disable react/style-prop-object */

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedNumber, FormattedPlural } from 'react-intl';
import { Link } from 'react-router-dom';
import like from './like.svg';

const CardStyled = styled.div`
  display: block;
  margin-bottom: 2rem;
  text-decoration: none;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #171717;

  ${props =>
    props.underline &&
    css`
    border-bottom: 1px solid #171717;
    `}
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

  @media screen and (min-width: 48rem) {
    font-size: .875rem;
    line-height: 1.25rem;
  }

  @media screen and (min-width: 48rem) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
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

const Card = props =>
  (<CardStyled>
    <LinkStyled to={props.link}>
      <Image src={props.photoUrl} alt={props.name} />
    </LinkStyled>
    <Metadata>
      <Description>
        {props.label !== ' ' &&
          <Label label={props.label}>
            {props.label}
          </Label>}
        <LinkStyled to={props.link}>
          <Name>
            {props.name}
          </Name>
        </LinkStyled>
        {props.colors > 0 &&
          <Availability colors={props.colors}>
            Available in&nbsp;
            <LinkStyled underline to={props.link}>
              {props.colors}&nbsp;
              <FormattedPlural value={props.colors} one="color" other="colors" />
            </LinkStyled>
          </Availability>}
        <Price>
          <FormattedNumber
            value={props.price}
            style="currency"
            currency={props.currency}
            currencyDisplay="symbol"
            minimumFractionDigits={0}
          />
        </Price>
      </Description>
      <Like type="button">Like</Like>
    </Metadata>
  </CardStyled>);

Card.defaultProps = {
  label: ' ',
  colors: 0,
};

Card.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  colors: PropTypes.number,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Card;

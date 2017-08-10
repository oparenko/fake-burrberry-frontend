import React from 'react';
import styled, { css } from 'styled-components';

const Actions = styled.section`
  margin-right: .5rem;
  margin-left: .5rem;

  @media screen and (min-width: 48rem) {
    margin-right: 0;
    margin-left: 0;
  }
`;

const Button = styled.button`
  display: block;
  text-transform: uppercase;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  line-height: 0.875rem;

  ${props => props.primary && css`
    width: 100%;
    margin-bottom: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    color: #fff;
    border: solid 1px #171717;
    border-radius: .125rem;
    background-color: #171717;
	`}

  ${props => props.secondary && css`
    width: 100%;
    margin-bottom: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border: solid 1px #999;
    border-radius: .125rem;
    background-color: transparent;
	`}

  ${props => props.tertiary && css`
    padding: 0;
    text-align: left;
    border: none;
    background-color: #fff;
    line-height: 1rem;
	`}
`;

export default () => (
  <Actions>
    <Button primary>Select a size</Button>
    <Button secondary>Find in store</Button>
    <Button tertiary>Need size help?</Button>
  </Actions>
);

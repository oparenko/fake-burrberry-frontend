import React from 'react';
import styled from 'styled-components';

const Colors = styled.section`
  margin-top: 1rem;
  margin-right: .5rem;
  margin-left: .5rem;

  @media screen and (min-width: 48rem) {
    margin-right: 0;
    margin-left: 0;
  }

  @media screen and (min-width: 62rem) {
    display: inline-block;
    margin-top: 0;
  }
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  color: #171717;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;
`;

const Selection = styled.strong`font-weight: bold;`;

const Wrapper = styled.div`display: flex;`;

const Button = styled.button`
  display: inline-block;
  overflow: hidden;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  white-space: nowrap;
  text-indent: -9999px;
  background: ${props => (props.color ? props.color : 'transparent')};
  border: solid 1px ${props => (props.active ? '#232122' : 'transparent')};
  border-radius: 50%;
  line-height: 1;
  cursor: pointer;
`;

const Divider = styled.hr`
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 1px;
  background: #c6c6c6;
  border: 0;

  @media screen and (min-width: 62rem) {
    display: none;
  }
`;

export default () =>
  (<Colors>
    <Description>
      Colour: <Selection>Honey</Selection>
    </Description>
    <Wrapper>
      <Button color="black" name="black" type="button">
        Change colour to black
      </Button>
      <Button active color="#cfa880" name="honey" type="button">
        Change colour to honey
      </Button>
    </Wrapper>
    <Divider />
  </Colors>);

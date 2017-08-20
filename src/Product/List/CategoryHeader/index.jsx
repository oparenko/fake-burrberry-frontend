import React from 'react';
import styled from 'styled-components';
import { MinMedium } from '../../../Common/Breakpoints';
import Filters from './Filters';

const Wrapper = styled.div`
  margin-bottom: 2rem;
  background-color: #f3f3f3;
  box-sizing: border-box;

  @media screen and (min-width: 48rem) {
    margin-bottom: 4rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-family: "Lora", "Times New Roman", serif;
  font-size: 1.625rem;
  font-weight: 400;
  line-height: 2rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Description = styled.p`
  margin: 0;
  padding-bottom: 2rem;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    padding-bottom: 2.5rem;
  }
`;

const More = styled.button`
  display: inline-block;
  padding: 0;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #171717;
  background-color: transparent;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #171717;
  border-left: 0;
`;

export default () =>
  (<Wrapper>
    <div className="container">
      <Title>Men&rsquo;s Clothing</Title>
      <div className="row">
        <div className="col-xs-12 col-md-9 col-lg-7">
          <Description>
            Explore our menswear collection for the season. Sculptural knitwear, sweatshirts, artist
            overalls and oversized cabans feature alongside our signature trench coat in both
            heritage.&nbsp;
            <MinMedium>
              <More type="button">More</More>
            </MinMedium>
          </Description>
        </div>
      </div>
      <Filters />
    </div>
  </Wrapper>);

import React from 'react';
import styled from 'styled-components';
import Card from './RecommendedCard';

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
`;

const Title = styled.h2`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 1.5rem;
  padding-bottom: 8px;
  vertical-align: baseline;
  text-transform: uppercase;
  border-bottom: 1px solid #171717;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.19;

  @media screen and (min-width: 48rem) {
    margin-bottom: 1rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export default () => (
  <Recommended>
    <Title>We recommend</Title>
    <Cards>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card
            name="Emroided Hooded Content For Three Lines"
            photo="Embroided-Hooded"
            price={27000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            name="Relaxed Fit Stretch Jeans Content For Three Lines"
            photo="Relaxed-Fit-Stretch-Jeans"
            price={22500}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            name="Leather and House Check Content For Three Lines"
            photo="Leather-and-House-Check"
            price={12000}
          />
        </div>
        <div className="col-xs-6 col-md-3">
          <Card
            name="Leather Wingtip Check Content For Three Lines"
            photo="Leather-Wingtip-Check"
            price={46000}
          />
        </div>
      </div>
    </Cards>
  </Recommended>
);

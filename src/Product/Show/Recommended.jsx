import React from 'react';
import styled from 'styled-components';

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

const ProductName = styled.h3`
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

export default () => (
  <Recommended>
    <Title>We recommend</Title>
    <Cards>
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <Card href="#">
            <Image src="img/Embroided-Hooded.jpg" alt="Embroided Hooded" />
            <ProductName>Emroided Hooded Content For Three Lines</ProductName>
            <Price>27 000 руб</Price>
          </Card>
        </div>
        <div className="col-xs-6 col-md-3">
          <Card href="#">
            <Image src="img/Relaxed-Fit-Stretch-Jeans.jpg" alt="Relaxed Fit Stretch Jeans" />
            <ProductName>Relaxed Fit Stretch Jeans Content For Three Lines</ProductName>
            <Price>22 500 руб</Price>
          </Card>
        </div>
        <div className="col-xs-6 col-md-3">
          <Card href="#">
            <Image src="img/Leather-and-House-Check.jpg" alt="Leather and House Check" />
            <ProductName>Leather and House Check Content For Three Lines</ProductName>
            <Price>120 000 руб</Price>
          </Card>
        </div>
        <div className="col-xs-6 col-md-3">
          <Card href="#">
            <Image src="img/Leather-Wingtip-Check.jpg" alt="Leather Wingtip Check" />
            <ProductName>Leather Wingtip Check Content For Three Lines</ProductName>
            <Price>46 000 руб</Price>
          </Card>
        </div>
      </div>
    </Cards>
  </Recommended>
);

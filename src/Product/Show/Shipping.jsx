import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 1.5rem;
  display: none;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: block;
    margin-top: 3rem;
  }

  @media screen and (min-width: 62rem) {
    margin-top: 4rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

const Title = styled.h2`
  padding: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 1rem;
  margin-left: 0;
  position: relative;
  display: inline-block;
  text-align: left;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.1875rem;
  color: #171717;
`;

const Subtitle = styled.h5`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: .25rem;
  margin-left: 0;
  padding: 0;
  font-size: .75rem;
  font-weight: 700;
  line-height: .875rem;
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 1.5rem;
  margin-left: 0;
  padding: 0;
  font-size: .75rem;
  line-height: 1rem;
  color: #171717;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default () => (
  <Wrapper>
    <div className="row middle-lg">
      <div className="col-md-7">
        <Image
          src="img/Shipping.jpg"
          srcset="img/Shipping@2x.jpg 2x, img/Shipping@3x.jpg 3x"
          alt="Shipping"
        />
      </div>
      <div className="col-md-5 col-lg-4 col-lg-offset-1">
        <Title>Shipping & Returns</Title>
        <Subtitle>Free Next Day Delivery</Subtitle>
        <Paragraph>Order before 7pm Monday to Thursday for delivery the next day</Paragraph>
        <Subtitle>Collect-in-Store</Subtitle>
        <Paragraph>Order online today and pick up your items in store as early as tomorrow</Paragraph>
        <Subtitle>Free Returns</Subtitle>
        <Paragraph>Enjoy free returns on your order</Paragraph>
        <Subtitle>Free Gift Packaging</Subtitle>
        <Paragraph>Discover our gift packaging, a gold lined box tied with a coloured ribbon</Paragraph>
      </div>
    </div>
  </Wrapper>
);

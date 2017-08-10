import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 1.5rem;
  display: none;
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: .75rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    display: block;
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
  font-family: "Raleway", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1.1875rem;
  color: #171717;
`;

const Content = styled.div`
  display: block;

  h5 {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: .25rem;
    margin-left: 0;
    padding: 0;
    font-size: .75rem;
    font-weight: 700;
    line-height: .875rem;
  }

  p {
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 1.5rem;
    margin-left: 0;
    padding: 0;
    font-size: .75rem;
    line-height: 1rem;
    color: #171717;
  }

`;

export default () => (
  <Wrapper>
    <div className="row">
      <div className="col-md-7">
        <Image
          src="img/Shipping.jpg"
          srcset="img/Shipping@2x.jpg 2x, img/Shipping@3x.jpg 3x"
          alt="Shipping"
        />
      </div>
      <div className="col-md-5">

        <Title>Shipping & Returns</Title>
        <Content>
          <h5>Free Next Day Delivery</h5>
          <p>Order before 7pm Monday to Thursday for delivery the next day</p>
          <h5>Collect-in-Store</h5>
          <p>Order online today and pick up your items in store as early as tomorrow</p>
          <h5>Free Returns</h5>
          <p>Enjoy free returns on your order</p>
          <h5>Free Gift Packaging</h5>
          <p>Discover our gift packaging, a gold lined box tied with a coloured ribbon</p>
        </Content>
      </div>
    </div>
  </Wrapper>
);

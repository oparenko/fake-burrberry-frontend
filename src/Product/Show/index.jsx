import React from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';

import { MaxLarge, MinLarge } from '../../Common/Breakpoints';
import Title from './Title';
import Slider from './Slider';
import Info from './Info';
import Accordion from './Accordion';
import Shipping from './Shipping';
import Recommended from './Recommended';
import More from './More';

const Section = styled.section`@media screen and (min-width: 62rem) {background: #d4bdad;}`;

const FeaturedImage = styled.img`
  display: block;
  margin: 0;
  position: inherit;
  height: 651px;
  width: auto;
`;

const DescriptionImage = styled.img`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    width: 100%;
  }
`;

const Details = styled.section`@media screen and (min-width: 62rem) {margin-top: 4rem;}`;

const DetailedShots = styled.div`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    margin-top: 4rem;
  }
`;

const Shot = styled.img`
  display: block;
  width: 100%;

  ${props =>
    props.first &&
    css`
    margin-top: 6rem;
  `} ${props =>
  props.second &&
      css`
    margin-top: 10rem;
  `};
`;

export default () =>
  (<main>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat | Men |</title>
    </Helmet>
    <Section>
      <div className="container">
        <MaxLarge>
          <Title>Long Cotton Gabardine Car Coat</Title>
        </MaxLarge>
        <div className="row middle-lg">
          <div className="col-xs-12 col-md-7 col-lg-6">
            <MaxLarge>
              <Slider />
            </MaxLarge>
            <MinLarge>
              <FeaturedImage
                src="https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
                alt="Lightweight Grainy Nubuck Trench Coat"
              />
            </MinLarge>
          </div>
          <div className="col-xs-12 col-md-5 col-lg-6">
            <MinLarge>
              <Title>Cashmere Trench Coat</Title>
            </MinLarge>
            <Info />
          </div>
        </div>
      </div>
    </Section>
    <Details>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <Accordion isOpened displayedMd name="description">
              <p>A refined car coat crafted in protective cotton gabardine.</p>
              <p>
                Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and
                breathable fabric that protects against wind and rain.
              </p>
              <p>
                Raglan sleeves and a concealed button closure complement the clean tailored lines.
              </p>
              <p>The piece is finished with a distinctive check undercollar.</p>
              <br />
              <p>
                Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change
                slightly according to size.
              </p>
              <ul>
                <li>Outer: 100% cotton</li>
                <li>Check lining: 100% cotton</li>
                <li>Sleeve lining: 100% viscose</li>
                <li>Buttons: buffalo horn</li>
                <li>Specialist dry clean</li>
                <li>Made in Europe</li>
                <li>Item 39428531</li>
              </ul>
            </Accordion>
          </div>
          <div className="col-lg-8">
            <DescriptionImage
              src="https://assets.burberry.com/is/image/Burberryltd/04a942f3a7fc26c30f37c4afbcb77a969f1621cb.jpg?$BBY_V2_SL_3X4$&hei=960&wid=720"
              alt="Long Cotton Gabardine Car Coat Detail"
            />
          </div>
        </div>
        <DetailedShots>
          <div className="row">
            <div className="col-lg-4">
              <Shot
                first
                src="https://assets.burberry.com/is/image/Burberryltd/ac883de18f98ce6c630436cc95b594998dcfb5d6.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
                alt="Long Cotton Gabardine Car Coat Detail"
              />
            </div>
            <div className="col-lg-4">
              <Shot
                second
                src="https://assets.burberry.com/is/image/Burberryltd/7c5bb44b566ce3a820cfdc8cacb377065d540e95.jpg?$BBY_V2_SL_3X4$&hei=960&wid=720"
                alt="Long Cotton Gabardine Car Coat Detail"
              />
            </div>
            <div className="col-lg-4">
              <Shot
                src="https://assets.burberry.com/is/image/Burberryltd/1e8677ea552b01b2e33caa153088a5c59d25a462.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
                alt="Long Cotton Gabardine Car Coat Detail"
              />
            </div>
          </div>
        </DetailedShots>
        <Accordion name="shipping &amp; returns" />
        <Shipping />
        <Recommended />
        <More />
      </div>
    </Details>
  </main>);

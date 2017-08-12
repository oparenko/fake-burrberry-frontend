import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Helmet } from 'react-helmet';

import { Desktop, DesktopLess } from './Breakpoints';
import Title from './Title';
import Slider from './Slider';
import Info from './Info';
import Accordion from './Accordion';
import Shipping from './Shipping';
import Recommended from './Recommended'
import More from './More'

const Section = styled.section`
  @media screen and (min-width: 62rem) {
    background: #d4bdad;
  }
`;

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

const Details = styled.section`
  @media screen and (min-width: 62rem) {
    margin-top: 4rem;
  }
`;

const DetailedShots = styled.div`
  display: none;

  @media screen and (min-width: 62rem) {
    display: block;
    margin-top: 4rem;
  }
`;

const Shot = styled.img`
  display: block;
  min-width: 100%;

  ${props => props.first && css`
    margin-top: 6rem;
  `}
  
  ${props => props.second && css`
    margin-top: 10rem;
  `}
`;

export default () => (
  <main>
    <Helmet>
      <title>Long Cotton Gabardine Car Coat | Men -</title>
    </Helmet>
    <Section>
      <div className="container">
        <DesktopLess>
          <Title />
        </DesktopLess>
        <div className="row middle-lg">
          <div className="col-xs-12 col-md-7 col-lg-6">
            <DesktopLess>
              <Slider />
            </DesktopLess>
            <Desktop>
              <FeaturedImage
                src="img/Long-Cotton-Gabardine-Car-Coat-1.jpg"
                srcSet="img/Long-Cotton-Gabardine-Car-Coat-1@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-1@3x.jpg 3x"
                alt="Long Cotton Gabardine Car Coat"
              />
            </Desktop>
          </div>
          <div className="col-xs-12 col-md-5 col-lg-6">
            <Desktop>
              <Title />
            </Desktop>
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
              <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.</p>
              <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
              <p>The piece is finished with a distinctive check undercollar.</p>
              <br />
              <p>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.</p>
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
              src="img/Long-Cotton-Gabardine-Car-Coat-Detail-1.jpg"
              srcSet="img/Long-Cotton-Gabardine-Car-Coat-Detail-1@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-Detail-1@3x.jpg 3x"
              alt="Long Cotton Gabardine Car Coat Detail"
            />
          </div>
        </div>
        <DetailedShots>
          <div className="row">
            <div className="col-lg-4">
              <Shot
                first
                src="img/Long-Cotton-Gabardine-Car-Coat-Detail-2.jpg"
                srcSet="img/Long-Cotton-Gabardine-Car-Coat-Detail-2@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-Detail-2@3x.jpg 3x"
                alt="Long Cotton Gabardine Car Coat Detail"
              />
            </div>
            <div className="col-lg-4">
              <Shot
                second
                src="img/Long-Cotton-Gabardine-Car-Coat-Detail-3.jpg"
                srcSet="img/Long-Cotton-Gabardine-Car-Coat-Detail-3@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-Detail-3@3x.jpg 3x"
                alt="Long Cotton Gabardine Car Coat Detail"
              />
            </div>
            <div className="col-lg-4">
              <Shot
                src="img/Long-Cotton-Gabardine-Car-Coat-Detail-4.jpg"
                srcSet="img/Long-Cotton-Gabardine-Car-Coat-Detail-4@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-Detail-4@3x.jpg 3x"
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
  </main>
);

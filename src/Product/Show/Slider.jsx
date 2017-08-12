import React from 'react';
import styled from 'styled-components';

const Slider = styled.section`
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;
  display: block;
  left: 50%;
  right: 50%;
  width: 100vw;
  white-space: nowrap;
  overflow-x: scroll;
  font-size: 0;

  @media screen and (min-width: 48rem) {
    position: inherit;
    right: inherit;
    left: inherit;
    width: inherit;
    margin-right: inherit;
    margin-left: inherit;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: auto;

  @media screen and (min-width: 48rem) {
    flex-shrink: 0;
    width: auto;
    height: 576px;
  }

`;

export default () => (
    <Slider>
      <Photo
        src="img/Long-Cotton-Gabardine-Car-Coat-1.jpg"
        srcSet="img/Long-Cotton-Gabardine-Car-Coat-1@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-1@3x.jpg 3x"
        alt="Long Cotton Gabardine Car Coat"
      />
      <Photo
        src="img/Long-Cotton-Gabardine-Car-Coat-2.jpg"
        srcSet="img/Long-Cotton-Gabardine-Car-Coat-2@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-2@3x.jpg 3x"
        alt="Long Cotton Gabardine Car Coat"
      />
      <Photo
        src="img/Long-Cotton-Gabardine-Car-Coat-3.jpg"
        srcSet="img/Long-Cotton-Gabardine-Car-Coat-3@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-3@3x.jpg 3x"
        alt="Long Cotton Gabardine Car Coat"
      />
      <Photo
        src="img/Long-Cotton-Gabardine-Car-Coat-4.jpg"
        srcSet="img/Long-Cotton-Gabardine-Car-Coat-4@2x.jpg 2x, img/Long-Cotton-Gabardine-Car-Coat-4@3x.jpg 3x"
        alt="Long Cotton Gabardine Car Coat"
      />
    </Slider>
);

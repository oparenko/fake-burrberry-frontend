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

export default () =>
  (<Slider>
    <Photo
      src="https://assets.burberry.com/is/image/Burberryltd/98b658a12f42e12facf56ca59c87a33084b76231.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
      alt="Long Cotton Gabardine Car Coat"
    />
    <Photo
      src="https://assets.burberry.com/is/image/Burberryltd/ac883de18f98ce6c630436cc95b594998dcfb5d6.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
      alt="Long Cotton Gabardine Car Coat"
    />
    <Photo
      src="https://assets.burberry.com/is/image/Burberryltd/7c5bb44b566ce3a820cfdc8cacb377065d540e95.jpg?$BBY_V2_SL_3X4$&hei=960&wid=720"
      alt="Long Cotton Gabardine Car Coat"
    />
    <Photo
      src="https://assets.burberry.com/is/image/Burberryltd/1e8677ea552b01b2e33caa153088a5c59d25a462.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720"
      alt="Long Cotton Gabardine Car Coat"
    />
  </Slider>);

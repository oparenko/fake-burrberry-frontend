import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Wrapper = styled.div`padding-top: 4rem;`;

const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: "Lora", "Times New Roman", serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: #171717;

  @media screen and (min-width: 48rem) {
    margin-bottom: 2rem;
    font-size: 1.25rem;
  }
`;

const Divider = styled.hr`
  margin-top: 1rem;
  margin-bottom: 3rem;
  height: 1px;
  background-color: #c6c6c6;
  border: none;
`;

const heritage = [
  {
    id: 1,
    slug: 'the-westminster',
    label: 'Relaxed fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/995466e7e1113f3b2f6484ceb090072e1c9062dc.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 3,
    price: 120000,
    currency: 'RUB',
  },
  {
    id: 2,
    slug: 'the-kensington',
    label: 'Classic fit',
    name: 'The Kensington – Mid-Length Heritage Trench Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/90dd344122ccf1884fce63c4fc775bd6baa7a11f.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 4,
    price: 110000,
    currency: 'RUB',
  },
  {
    id: 3,
    slug: 'the-sandringham',
    label: 'Toilered fit',
    name: 'The Sandringham – Mid-length Heritage Trench Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/fb6adea94455f2a73e97b5cf2d7811d9135dcbe2.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 3,
    price: 110000,
    currency: 'RUB',
  },
  {
    id: 4,
    slug: 'the-chelsea',
    label: 'Slim fit',
    name: 'The Chelsea – Short Heritage Trench Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/a2fa084eae958434c326685fc8ff19dfce9fe430.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 3,
    price: 100000,
    currency: 'RUB',
  },
  {
    id: 5,
    slug: 'the-westminster',
    label: 'Relaxed fit',
    name: 'The Westminster – Long Heritage Trench Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/f1cdf8b71c19df8d42ed3ea90712c391e6823635.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 3,
    price: 120000,
    currency: 'RUB',
  },
  {
    id: 6,
    slug: 'the-kensington',
    label: 'Classic fit',
    name: 'The Kensington – Mid-Length Heritage Trench Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/23b186def7725e3d4ce4745374ebf11267ed68ed.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 4,
    price: 110000,
    currency: 'RUB',
  },
  {
    id: 7,
    slug: 'the-sandringham',
    label: 'Toilered fit',
    name: 'The Sandringham – Mid-length Heritage Trench Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/c89a32c4e94178be2d833b9a3d434fa6087d1f25.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 3,
    price: 110000,
    currency: 'RUB',
  },
  {
    id: 8,
    slug: 'the-chelsea',
    label: 'Slim fit',
    name: 'The Chelsea – Short Heritage Trench Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/f3e96bbcf8fa0aca509c9f5933110b8596d4f06e.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 3,
    price: 100000,
    currency: 'RUB',
  },
];

const singleBreasted = [
  {
    id: 1,
    slug: 'the-brighton',
    label: 'Online exclusive',
    name: 'The Brighton – Longline Car Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/70d0ea20f4faa00e90a0e70fed88af9cd4874824.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 7,
    price: 120000,
    currency: 'RUB',
  },
  {
    id: 2,
    slug: 'the-brighton',
    label: 'New in',
    name: 'The Brighton – Longline Car Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/32792b6c9cf40c27ce446864bc6bae457d490199.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 7,
    price: 120000,
    currency: 'RUB',
  },
  {
    id: 3,
    slug: 'the-brighton',
    label: 'New in',
    name: 'The Brighton – Longline Car Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/0c526ecde3443d15c60f660214d320ca4c338c88.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 7,
    price: 120000,
    currency: 'RUB',
  },
  {
    id: 4,
    slug: 'the-brighton',
    label: 'New in',
    name: 'The Brighton – Longline Car Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/98f1a84f2c171dfc4ffe373e13f5c258e4b79ea9.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 7,
    price: 120000,
    currency: 'RUB',
  },
  {
    id: 5,
    slug: 'the-camden',
    label: 'New in',
    name: 'The Camden – Mid-length Car Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/3bbc6df8655e77f5a75880f03c3ab3f7c92d2ee9.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 7,
    price: 100000,
    currency: 'RUB',
  },
  {
    id: 6,
    slug: 'the-camden',
    label: 'New in',
    name: 'The Camden – Mid-length Car Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/b340592f566593645f37fd61fdafe720e2c224b7.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 7,
    price: 100000,
    currency: 'RUB',
  },
  {
    id: 7,
    slug: 'the-camden',
    label: 'New in',
    name: 'The Camden – Mid-length Car Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/746fc06ca713d953b757e6e36fcc68efba116198.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 7,
    price: 100000,
    currency: 'RUB',
  },
  {
    id: 8,
    slug: 'the-camden',
    label: 'New in',
    name: 'The Camden – Mid-length Car Coat',
    photoUrl:
      'https://assets.burberry.com/is/image/Burberryltd/1297c5d67c810e003eed53e02959843669f1ce9c.jpg?$BBY_V2_ML_3X4$&hei=960&wid=720',
    colors: 7,
    price: 100000,
    currency: 'RUB',
  },
];

export default () =>
  (<Wrapper>
    <section>
      <SectionTitle>Heritage Trench Coats</SectionTitle>
      <div className="row">
        {heritage.map(product =>
          (<div className="col-xs-6 col-md-3" key={product.id}>
            <Card
              to={`/products/men/trench-coats/${product.slug}`}
              label={product.label}
              name={product.name}
              photoUrl={product.photoUrl}
              colors={product.colors}
              price={product.price}
              currency={product.currency}
            />
          </div>),
        )}
      </div>
    </section>
    <Divider />
    <section>
      <SectionTitle>Single Breasted Trench Coats</SectionTitle>
      <div className="row">
        {singleBreasted.map(product =>
          (<div className="col-xs-6 col-md-3" key={product.id}>
            <Card
              to={`/products/men/trench-coats/${product.slug}`}
              label={product.label}
              name={product.name}
              photoUrl={product.photoUrl}
              colors={product.colors}
              price={product.price}
              currency={product.currency}
            />
          </div>),
        )}
      </div>
    </section>
  </Wrapper>);

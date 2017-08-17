import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import CategoryHeader from './CategoryHeader';
import ShowMore from './ShowMore';
import Card from '../Card';

const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: "Lora", "Times New Roman", serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: #171717;
`;

const Divider = styled.hr`
  margin-top: 1rem;
  margin-bottom: 3rem;
  height: 1px;
  background-color: #c6c6c6;
  border: none;
`;

export default () =>
  (<main>
    <Helmet>
      <title>Men&apos;s Coats | Pea, Duffle & Top Coats |</title>
    </Helmet>
    <CategoryHeader />
    <div className="container">
      <section>
        <SectionTitle>Heritage Trench Coats</SectionTitle>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
        </div>
      </section>
      <Divider />
      <section>
        <SectionTitle>Single Breasted Trench Coats</SectionTitle>
        <div className="row">
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
          <div className="col-xs-6 col-md-3">
            <Card />
          </div>
        </div>
      </section>
      <ShowMore />
    </div>
  </main>);

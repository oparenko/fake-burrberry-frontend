import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Title from './Title';
import Slider from './Slider';
import Info from './Info';
import Accordion from './Accordion';
import Shipping from './Shipping';
import Recommended from './Recommended'
import More from './More'

export default () => (
  <div className="container">
    <Helmet>
      <title>Long Cotton Gabardine Car Coat | Men -</title>
    </Helmet>
    <Title />
    <div className="row">
      <div className="col-xs-12 col-md-7">
        <Slider />
      </div>
      <div className="col-xs-12 col-md-5">
        <Info />
      </div>
    </div>
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
    <Accordion name="shipping &amp; returns" />
    <Shipping />
    <Recommended />
    <More />
  </div>
);

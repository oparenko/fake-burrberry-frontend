import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Title from './Title.jsx';
import Slider from './Slider.jsx';
import Metadata from './Metadata.jsx';
import Colors from './Colors.jsx'
import Actions from './Actions.jsx';
import Accordion from './Accordion.jsx';
import Shipping from './Shipping.jsx';
import Recommended from './Recommended.jsx'
import More from './More.jsx'
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Long Cotton Gabardine Car Coat | Men -</title>
        </Helmet>
        <main className="main">
          <div className="container">
            <Title />
            <div className="row">
              <Slider />
              <div className="col-xs-12 col-md-5">
                <Metadata />
                <Colors />
                <Actions />
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
            <Recommended />
            <More />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;

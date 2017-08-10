import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Title from './Title.jsx';
import Slider from './Slider.jsx';
import Metadata from './Metadata.jsx';
import Colors from './Colors.jsx'
import Actions from './Actions.jsx';
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
            <section className="details">
              <button className="details__dropdown details__dropdown--active" type="button">
                <h2 className="details__title">Description</h2>
              </button>
              <div className="details__description">
                <p>A refined car coat crafted in protective cotton gabardine.</p>
                <p>Invented by Thomas Burberry in 1879, cotton gabardine is a tightly woven and breathable fabric that protects against wind and rain.</p>
                <p>Raglan sleeves and a concealed button closure complement the clean tailored lines.</p>
                <p>The piece is finished with a distinctive check undercollar.</p>
                <br/>
                <ul>
                  <li>Coat length: 98cm/38.6in. This is based on a size UK 48 as proportions change slightly according to size.</li>
                  <li>Outer: 100% cotton</li>
                  <li>Check lining: 100% cotton</li>
                  <li>Sleeve lining: 100% viscose</li>
                  <li>Buttons: buffalo horn</li>
                  <li>Specialist dry clean</li>
                  <li>Made in Europe</li>
                  <li>Item 39428531</li>
                </ul>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <img className="details__shipping-img" src="img/Shipping.jpg" srcset="img/Shipping@2x.jpg 2x, img/Shipping@3x.jpg 3x" alt="Shipping"/>
                </div>
                <div className="col-xs-12 col-md-5">
                  <button className="details__dropdown" type="button">
                    <h2 className="details__title">Shipping &amp; returns</h2>
                  </button>
                  <div className="details__shipping">
                    <h5>Free Next Day Delivery</h5>
                    <p>Order before 7pm Monday to Thursday for delivery the next day</p>
                    <h5>Collect-in-Store</h5>
                    <p>Order online today and pick up your items in store as early as tomorrow</p>
                    <h5>Free Returns</h5>
                    <p>Enjoy free returns on your order</p>
                    <h5>Free Gift Packaging</h5>
                    <p>Discover our gift packaging, a gold lined box tied with a coloured ribbon</p>
                  </div>
                </div>
              </div>
            </section>
            <Recommended />
            <More />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;

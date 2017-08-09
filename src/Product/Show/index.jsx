import React, { Component } from 'react';
import Slider from './Slider.jsx';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <h1 className="title">Long Cotton Gabardine Car Coat</h1>
          <div className="row">
            <Slider />
            <div className="col-xs-12 col-md-5">
              <section className="metadata">
                <h2 className="metadata__price">110 000 руб.</h2>
                <p className="metadata__id">Item 39428531</p>
              </section>
              <section className="colour-picker">
                <p className="colour-picker__description">Colour: Honey</p>
                <div className="colour-picker__button-wrapper">
                  <button className="colour-picker__button colour-picker__button--black" type="button">Change colour to black</button>
                  <button className="colour-picker__button colour-picker__button--honey colour-picker__button--active" type="button">Change colour to honey</button>
                </div>
              </section>
              <hr className="separator"/>
              <section className="actions">
                <button className="actions__button actions__button--primary" type="button">Select a size</button>
                <button className="actions__button actions__button--secondary" type="button">Find in store</button>
                <button className="actions__button actions__button--tertiary" type="button">Need size help?</button>
              </section>
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
          <section className="recommended">
            <h2 className="recommended__title">We recommend</h2>
            <div className="recommended__products">
              <div className="row">
                <div className="col-xs-6 col-md-3">
                  <a className="recommended__product-card recommended__link" href="#">
                    <img className="recommended__product-image" src="img/Embroided-Hooded.jpg" alt="Embroided Hooded"/>
                    <h3 className="recommended__product-title">Emroided Hooded Content For Three Lines</h3>
                    <h5 className="recommended__product-price">27 000 руб</h5>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3">
                  <a className="recommended__product-card recommended__link" href="#">
                    <img className="recommended__product-image" src="img/Relaxed-Fit-Stretch-Jeans.jpg" alt="Relaxed Fit Stretch Jeans"/>
                    <h3 className="recommended__product-title">Relaxed Fit Stretch Jeans Content For Three Lines</h3>
                    <h5 className="recommended__product-price">22 500 руб</h5>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3">
                  <a className="recommended__product-card recommended__link" href="#">
                    <img className="recommended__product-image" src="img/Leather-and-House-Check.jpg" alt="Leather and House Check"/>
                    <h3 className="recommended__product-title">Leather and House Check Content For Three Lines</h3>
                    <h5 className="recommended__product-price">120 000 руб</h5>
                  </a>
                </div>
                <div className="col-xs-6 col-md-3">
                  <a className="recommended__product-card recommended__link" href="#">
                    <img className="recommended__product-image" src="img/Leather-Wingtip-Check.jpg" alt="Leather Wingtip Check"/>
                    <h3 className="recommended__product-title">Leather Wingtip Check Content For Three Lines</h3>
                    <h5 className="recommended__product-price">46 000 руб</h5>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="more">
            <h2 className="more__title">More for you</h2>
            <a className="more__link" href="#">Men’s Black Trench Coats</a>
            <a className="more__link" href="#">Men’s Short Trench Coats</a>
            <a className="more__link" href="#">Men’s Long Trench Coats</a>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;

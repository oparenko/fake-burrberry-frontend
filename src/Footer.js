import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__navigation">
            <div className="row">
              <div className="col-md-3">
                <h3 className="footer__navigation-title">Customer Service</h3>
                <nav>
                  <a className="footer__navigation-link" href="#">Contact Us</a>
                  <a className="footer__navigation-link" href="#">Payment</a>
                  <a className="footer__navigation-link" href="#">Shipping</a>
                  <a className="footer__navigation-link" href="#">Returns</a>
                  <a className="footer__navigation-link" href="#">Faqs</a>
                  <a className="footer__navigation-link" href="#">Live Chat</a>
                  <a className="footer__navigation-link" href="#">The Burberry App</a>
                  <a className="footer__navigation-link" href="#">Store Locator</a>
                </nav>
              </div>
              <div className="col-md-3">
                <h3 className="footer__navigation-title">Our company</h3>
                <nav>
                  <a className="footer__navigation-link" href="#">Our History</a>
                  <a className="footer__navigation-link" href="#">Burberry Group Plc</a>
                  <a className="footer__navigation-link" href="#">Careers</a>
                  <a className="footer__navigation-link" href="#">Corporate Responsibility</a>
                  <a className="footer__navigation-link" href="#">Site Map</a>
                </nav>
              </div>
              <div className="col-md-3">
                <h3 className="footer__navigation-title">Legal &amp; Cookies</h3>
                <nav>
                  <a className="footer__navigation-link" href="#">Terms &amp; Conditions</a>
                  <a className="footer__navigation-link" href="#">Privacy Policy</a>
                  <a className="footer__navigation-link" href="#">Cookie Policy</a>
                  <a className="footer__navigation-link" href="#">Accessibility Statement</a>
                  <a className="footer__navigation-link" href="#">Japan Only - SCTL indications</a>
                </nav>
              </div>
            </div>
          </div>
          <div className="footer__preferences">
            <button className="footer__button" type="button">Shipping country: Russian Federation</button>
            <button className="footer__button" type="button">Language: English</button>
          </div>
          <div className="need-help">
            <h4 className="need-help__title">Need help?</h4>
            <a className="need-help__link" href="#">Find out more and contact us</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

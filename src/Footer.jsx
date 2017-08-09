import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  padding-right: .5rem;
  padding-bottom: 2rem;
  padding-left: .5rem;
  background-color: #f3f3f3;

  @media screen and (min-width: 48rem) {
    margin-top: 0;
    padding-right: 0;
    padding-left: 0;
  }
`;

const Navigation = styled.div`
  display: none;
  padding-bottom: 2rem;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 0.75rem;

  @media screen and (min-width: 48rem) {
    display: block;
  }
`;

const NavigationTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: #171717;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 0.875rem;
`;

const NavigationLink = styled.a`
  display: block;
  padding-bottom: 0.75rem;
  text-decoration: none;
  color: #999;
  font-weight: 600;
  line-height: 1rem;

  &:last-of-type {
    padding-bottom: 0;
  }
`;

const Preferences = styled.div`
  display: block;

  @media screen and (min-width: 48rem) {
    display: flex;
  }
`;

const Button = styled.button`
  display: block;
  margin-bottom: 1rem;
  padding: 0;
  color: #999;
  border: none;
  background-color: inherit;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 400;
  line-height: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (min-width: 48rem) {
    margin-right: 1.5rem;
    margin-bottom: 0;
  }
`;

const NeedHelp = styled.div`
  text-align: center;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

const NeedHelpTitle = styled.h4`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.1875rem;
`;

const NeedHelpLink = styled.a`
  text-decoration: none;
  color: #171717;
  font-family: "Lora", "Times New Roman", serif;
  font-size: .875rem;
  font-style: italic;
  line-height: 1.0625rem;
`;

export default () => (
  <Footer>
    <div className="container">
      <Navigation>
        <div className="row">
          <div className="col-md-3">
            <NavigationTitle>Customer Service</NavigationTitle>
            <nav>
              <NavigationLink href="#">Contact Us</NavigationLink>
              <NavigationLink href="#">Payment</NavigationLink>
              <NavigationLink href="#">Shipping</NavigationLink>
              <NavigationLink href="#">Returns</NavigationLink>
              <NavigationLink href="#">Faqs</NavigationLink>
              <NavigationLink href="#">Live Chat</NavigationLink>
              <NavigationLink href="#">The Burberry App</NavigationLink>
              <NavigationLink href="#">Store Locator</NavigationLink>
            </nav>
          </div>
          <div className="col-md-3">
            <NavigationTitle>Our Company</NavigationTitle>
            <nav>
              <NavigationLink href="#">Our History</NavigationLink>
              <NavigationLink href="#">Burberry Group Plc</NavigationLink>
              <NavigationLink href="#">Careers</NavigationLink>
              <NavigationLink href="#">Corporate Responsibility</NavigationLink>
              <NavigationLink href="#">Site Map</NavigationLink>
            </nav>
          </div>
          <div className="col-md-3">
            <NavigationTitle>Legal &amp; Cookies</NavigationTitle>
            <nav>
              <NavigationLink href="#">Terms &amp; Conditions</NavigationLink>
              <NavigationLink href="#">Privacy Policy</NavigationLink>
              <NavigationLink href="#">Cookie Policy</NavigationLink>
              <NavigationLink href="#">Accessibility Statement</NavigationLink>
              <NavigationLink href="#">Japan Only - SCTL indications</NavigationLink>
            </nav>
          </div>
        </div>
      </Navigation>
      <Preferences>
        <Button href="#">Shipping country: Russian Federation</Button>
        <Button href="#">Language: English</Button>
      </Preferences>
      <NeedHelp>
        <NeedHelpTitle>Need help?</NeedHelpTitle>
        <NeedHelpLink href="#">Find out more and contact us</NeedHelpLink>
      </NeedHelp>
    </div>
  </Footer>
);

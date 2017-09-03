import React from 'react';
import styled from 'styled-components';
import Preferences from './Preferences';
import { MinLarge } from '../Common/Breakpoints';

const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #f3f3f3;

  @media screen and (min-width: 48rem) {
    margin-top: 0;
    padding-right: 0;
    padding-left: 0;
  }

  @media screen and (min-width: 62rem) {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
`;

const Navigation = styled.div`
  display: none;
  padding-bottom: 2rem;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;

  @media screen and (min-width: 48rem) {
    display: block;
  }

  @media screen and (min-width: 62rem) {
    padding-bottom: 3rem;
  }
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: #171717;
  font-size: .75rem;
  font-weight: bold;
  line-height: .875rem;
`;

const Link = styled.a`
  display: block;
  padding-bottom: .75rem;
  text-decoration: none;
  color: #999;
  font-weight: 600;
  line-height: 1rem;

  &:last-of-type {
    padding-bottom: 0;
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

const StoreImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const FindStore = styled.a`
  margin-top: 1rem;
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-size: .75rem;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;
  color: #171717;
  border-bottom: 1px solid #171717;
  text-decoration: none;
  cursor: pointer;
`;

export default () =>
  (<Footer>
    <div className="container">
      <Navigation>
        <div className="row">
          <div className="col-md-3">
            <Title>Customer Service</Title>
            <nav>
              <Link href="#">Contact Us</Link>
              <Link href="#">Payment</Link>
              <Link href="#">Shipping</Link>
              <Link href="#">Returns</Link>
              <Link href="#">Faqs</Link>
              <Link href="#">Live Chat</Link>
              <Link href="#">The Burberry App</Link>
              <Link href="#">Store Locator</Link>
            </nav>
          </div>
          <div className="col-md-3">
            <Title>Our Company</Title>
            <nav>
              <Link href="#">Our History</Link>
              <Link href="#">Burberry Group Plc</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Corporate Responsibility</Link>
              <Link href="#">Site Map</Link>
            </nav>
          </div>
          <div className="col-md-3">
            <Title>Legal &amp; Cookies</Title>
            <nav>
              <Link href="#">Terms &amp; Conditions</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Cookie Policy</Link>
              <Link href="#">Accessibility Statement</Link>
              <Link href="#">Japan Only - SCTL indications</Link>
            </nav>
          </div>
          <MinLarge>
            <div className="col-md-3">
              <StoreImage
                src="https://assets.burberry.com/is/image/Burberryltd/933f04c94a361dfd816c77528ec0e7286921051b.jpg?$BBY_V2_BASIC$&wid=464"
                alt="Burrberry store"
              />
              <FindStore href="#">Find a Store</FindStore>
            </div>
          </MinLarge>
        </div>
      </Navigation>
      <Preferences />
      <NeedHelp>
        <NeedHelpTitle>Need help?</NeedHelpTitle>
        <NeedHelpLink href="#">Find out more and contact us</NeedHelpLink>
      </NeedHelp>
    </div>
  </Footer>);

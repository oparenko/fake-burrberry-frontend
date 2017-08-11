import React, { Component } from "react";
import { Helmet } from 'react-helmet';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import Header from "./Header";
import Product from "./Product/Show/";
import Footer from "./Footer";

addLocaleData([...en, ...ru]);

export default () => (
  <IntlProvider locale={navigator.language}>
    <div>
      <Helmet defaultTitle="Burrberry" titleTemplate="%s Burrberry"/>
      <Header />
      <Product />
      <Footer />
    </div>
  </IntlProvider>
);

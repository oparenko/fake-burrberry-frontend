import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import Header from './Header/';
import Show from './Product/Show/';
import List from './Product/List/';
import Footer from './Footer';

addLocaleData([...en, ...ru]);

export default () =>
  (<Router>
    <IntlProvider locale={navigator.language}>
      <div>
        <Helmet defaultTitle="Burrberry" titleTemplate="%s Burrberry" />
        <Header />

        <Route exact path="/products" component={List} />
        <Route path="/product" component={Show} />

        <Footer />
      </div>
    </IntlProvider>
  </Router>);

import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
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
  (<IntlProvider locale="ru">
    <Router>
      <div>
        <Helmet defaultTitle="Burberry" titleTemplate="%s | Burberry" />
        <Header />
        <Switch>
          <Route exact path="/products/:section/" component={List} />
          <Route exact path="/products/:section/:category" component={List} />
          <Route path="/products/:section/:category/:id" component={Show} />
          <Redirect from="/" to="/products/men/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  </IntlProvider>);

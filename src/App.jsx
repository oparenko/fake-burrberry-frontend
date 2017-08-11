import React, { Component } from "react";
import { Helmet } from 'react-helmet';

import Header from "./Header";
import Product from "./Product/Show/";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet defaultTitle="Burrberry" titleTemplate="%s Burrberry"/>
        <Header />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default App;

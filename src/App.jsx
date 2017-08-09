import React, { Component } from "react";
import { Helmet } from 'react-helmet';

import Header from "./Header.jsx";
import Main from "./Main";
import Footer from "./Footer.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Helmet defaultTitle="Burrberry" titleTemplate="%s Burrberry"/>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

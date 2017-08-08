import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'flexboxgrid2';
import WebFont from 'webfontloader';
import './index.css';
import Header from './Header';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Lora:400,400i', 'serif', 'Raleway:400,500,600,700&amp;subset=cyrillic', 'sans-serif']
  }
});

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();

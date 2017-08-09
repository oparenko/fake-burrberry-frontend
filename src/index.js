import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'flexboxgrid2';
import WebFont from 'webfontloader';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
  google: {
    families: ['Lora:400,400i', 'Raleway:400,500,600,700&amp;subset=cyrillic']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

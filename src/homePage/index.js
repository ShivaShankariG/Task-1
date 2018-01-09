import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import homePage from './homePage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<homePage />, document.getElementById('root'));

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import searchPage from './searchPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<searchPage />, document.getElementById('root'));
registerServiceWorker();

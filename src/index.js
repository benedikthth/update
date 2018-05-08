import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';


import './index.css';
import languageData from './translate/languages.js';
const locales = [{
  label: 'English', value: 'en_US',
}, {
  label: 'Islenska', value: 'is_IS',
}];

ReactDOM.render(
  <App data={languageData} locales={locales} />,
  document.getElementById('root')
);

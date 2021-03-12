import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reset from 'react-style-reset/string';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${reset};
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,

    document.getElementById('root'),
);

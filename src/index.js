import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import Header from 'components/Header';

// style
import GlobalStyle from 'style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
  </React.StrictMode>
);
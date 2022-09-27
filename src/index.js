import React from 'react';
import ReactDOM from 'react-dom/client';

// component
import Header from './components/Header';
import Calendar from './pages/Calendar/Calendar';

// style
import GlobalStyle from './style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Calendar />
  </React.StrictMode>
);
//libraries
import React from 'react';
//custom components
import GlobalStyle from './components/GlobalStyle';
import Footer from './components/Footer';
import Layout from './components/Layout';
import { createRoot } from 'react-dom';

//using react 18
const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Footer />
    </>
  );
};

root.render(<App />);

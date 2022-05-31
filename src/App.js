//libraries
import React from 'react';
import reactDOM from 'react-dom';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
//icons
import { FaReact } from 'react-icons/fa';
//custom components
import GlobalStyle from './components/GlobalStyle';
//DOM el
const rootEl = document.getElementById('root');

const infiniteSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  position: absolute;
  top: calc(50% - 70px);
  left: calc(50% - 283.3px / 2);
  color: #fff;

  .logo {
    font-size: 100px;
    color: #61dbfb;
    animation: ${infiniteSpin} 5s linear infinite;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Title>
        <FaReact className="logo" />
        <br />
        Hello React!
      </Title>
    </React.Fragment>
  );
};

reactDOM.render(<App />, rootEl);

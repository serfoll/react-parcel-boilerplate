import React from 'react';

import styled from 'styled-components';

const Attribution = styled.div`
  position: absolute;
  bottom: 20px;
  left: calc(50% - 286px / 2);
  font-size: 11px;
  text-align: center;

  a {
    color: hsl(228, 45%, 44%);

    &:hover {
      color: #fff;
    }
  }
`;

const Footer = () => {
  return (
    <Attribution>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Your Name Here</a>.
    </Attribution>
  );
};

export default Footer;

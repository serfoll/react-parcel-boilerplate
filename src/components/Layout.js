import React from 'react';
import styled from 'styled-components';

//custom components
import Survey from './Survey';

const Wrapper = styled.div`
  width: 360px;
  box-sizing: border-box;
  position: absolute;
  top: calc(50% - 400px / 2);
  left: calc(50% - 350px / 2);
`;

const Layout = () => {
  return (
    <Wrapper>
      <Survey />
    </Wrapper>
  );
};

export default Layout;

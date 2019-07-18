import React from "react";
import styled from 'styled-components'

const ExtraInfoDiv = styled.div`
  border: 1px solid green;
  border-radius: 8px;
`;

const Footer = ({ propsMediaType, propsUrl }) => {
  return (
    <ExtraInfoDiv>
      <p>Media Type: {propsMediaType}</p>
      <p>URL: {propsUrl}</p>
    </ExtraInfoDiv>
  );
};

export default Footer;

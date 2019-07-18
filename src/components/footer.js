import React from "react";
import styled from 'styled-components'

const ExtraInfoDiv = styled.div`
  border: 3px solid #ffffff;
  border-radius: 8px;
  width: 700px;
  margin: 25px auto;
  color: #0b3d91;
`;

const Footer = ({ propsMediaType, propsUrl }) => {
  return (
    <ExtraInfoDiv>
      <h3>Extra Info:</h3>
      <p>Media Type: {propsMediaType}</p>
      <p>URL: {propsUrl}</p>
    </ExtraInfoDiv>
  );
};

export default Footer;

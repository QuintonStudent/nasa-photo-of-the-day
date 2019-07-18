import React from "react";
import styled from 'styled-components'

const BodyDiv = styled.div`
  border: 3px solid #fc3d21;
  border-radius: 8px;
  width: 500px;
  margin: auto;
  padding: 25px 0;
`;

const Body = ({ propsUrl, propsMediaType }) => {

  if(propsMediaType === 'video') {
    return (
      <BodyDiv>
        <iframe width='420' height='315'
          src={propsUrl}>
        </iframe>
      </BodyDiv>
    )
  }
  else {
    return (
      <BodyDiv>
        <img width='420' src={propsUrl} />
      </BodyDiv>
    )
  }
};

export default Body;

import React from "react";
import styled from 'styled-components'

const Button = styled.button`
  padding: 6px 10px;
  margin: 5px;
  border-radius: 8px;

  ${props => (props.type === 'primary' ? `background: #fc3d21` : null)}
  ${props => (props.type === 'secondary' ? `background: #0b3d91` : null)}
  ${props => (props.type === 'tertiary' ? `background: #ffffff` : null)}
`;

const Header = ({ propsDate, propsTitle, propsExplanation }) => {
  return (
    <>
      <Button type='primary' onClick={ () => alert(propsDate) }>Date</Button>
      <Button type='secondary' onClick={ () => alert(propsTitle) }>Title</Button>
      <Button type='tertiary' onClick={ () => alert(propsExplanation) }>Explanation</Button>
    </>
  );
}

export default Header;

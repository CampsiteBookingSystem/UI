import React from 'react';
import styled from 'styled-components';

const ColorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: ${props => props.color && `${props.color}`};
  border-radius: 3px;
`;

const ColorValue = styled.span`
  color: ${props => (props.light ? `#333333` : `#ffffff`)};
`;

const Name = styled.p`
  margin: 10px 0 0;
  color: #333333;
  text-align: center;
`;

function Color(props) {
  return (
    <div>
      <ColorBox color={props.default}>
        <ColorValue light={props.isLight}>{props.default}</ColorValue>
      </ColorBox>
      <Name>{props.name}</Name>
    </div>
  );
}

export default Color;

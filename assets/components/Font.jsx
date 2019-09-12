import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  margin-bottom: 10px;
  color: #333333;
  font-size: 20px;
  font-weight: bold;
`;

const Text = styled.div`
  color: #333333;
  font-family: "${props => props.name}";
  font-size: 18px;
  word-spacing: 4px;
`;

function Font(props) {
  return (
    <div>
      <Title>{props.name}</Title>
      <Text name={props.name}>
        Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz ?!
      </Text>
    </div>
  );
}

export default Font;

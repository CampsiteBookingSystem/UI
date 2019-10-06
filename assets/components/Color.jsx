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
  function luminanace(r, g, b) {
    var a = [r, g, b].map(function(v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  function contrast(rgb1, rgb2) {
    return (
      (luminanace(rgb1[0], rgb1[1], rgb1[2]) + 0.05) /
      (luminanace(rgb2[0], rgb2[1], rgb2[2]) + 0.05)
    );
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result
      ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
      : null;
  }

  const colorContrast = contrast([255, 255, 255], hexToRgb(props.default));

  return (
    <div>
      <ColorBox color={props.default}>
        <ColorValue light={colorContrast < 3}>{props.default}</ColorValue>
      </ColorBox>
      <Name>{props.name}</Name>
    </div>
  );
}

export default Color;

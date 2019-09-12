import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  flex: 0 1 20%;
  min-width: 120px;
  padding: 0px 7.5px 20px;
`;

const Link = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

const IconContainer = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: none;
`;

const Label = styled.div`
  margin-left: 10px;
  color: #666666;
  font-size: 12px;
`;

function Icon(props) {
  return (
    <ListItem>
      <Link href={props.asset} download>
        <IconContainer>{props.icon}</IconContainer>
        <Label>{props.label}</Label>
      </Link>
    </ListItem>
  );
}

export default Icon;

import React from 'react';
import styled from 'styled-components';

import * as IconComponents from '../../src/icons';

import Icon from './Icon';

import Clear from '../../src/assets/icons/Clear.svg';
import Eye from '../../src/assets/icons/Eye.svg';

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: 20px 0 0;
  list-style: none;
`;

function Icons() {
  return (
    <List>
      <Icon
        label="Clear"
        icon={<IconComponents.Clear color="var(--color-primary)" />}
        asset={Clear}
      />
      <Icon label="Eye" icon={<IconComponents.Eye color="var(--color-primary)" />} asset={Eye} />
    </List>
  );
}

export default Icons;

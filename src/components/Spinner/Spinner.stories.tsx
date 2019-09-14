import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import Spinner from './Spinner';

export default {
  title: 'Playground | Spinner',
  component: Spinner,
};

export const spinner = () => {
  const colors = {
    White: '#ffffff',
    Primary: 'var(--color-primary)',
    Secondary: 'var(--color-secondary)',
    Danger: 'var(--color-danger)',
  };

  const color = radios('Color', colors, 'Primary');

  const props: any = {
    color,
    size: text('Size', '20px'),
  };

  return (
    <div className="Container">
      <div className="Row">
        <Spinner {...props} />
      </div>
    </div>
  );
};

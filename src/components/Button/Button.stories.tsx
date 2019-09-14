import React from 'react';
import { text, radios, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button, { Scope, Type } from './Button';

export default {
  title: 'Playground | Button',
  component: Button,
};

export const button = () => {
  const types = {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger',
  };

  const scope = 'default' as Scope;
  const type = radios('Type', types, 'primary') as Type;

  const props: any = {
    scope,
    type,
    disabled: boolean('Disabled', false),
    loading: boolean('Loading', false),
    onClick: action('CLICK'),
  };

  const label = text('Label', 'Click here');

  return (
    <div className="Container">
      <div className="Row">
        <Button {...props}>{label}</Button>
      </div>
    </div>
  );
};

export const rounded = () => {
  const types = {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger',
  };

  const scope = 'rounded' as Scope;
  const type = radios('Type', types, 'primary') as Type;

  const props: any = {
    scope,
    type,
    disabled: boolean('Disabled', false),
    loading: boolean('Loading', false),
    onClick: action('CLICK'),
  };

  const label = text('Label', 'Click here');

  return (
    <div className="Container">
      <div className="Row">
        <div className="Column">
          <Button {...props}>{label}</Button>
        </div>
      </div>
    </div>
  );
};

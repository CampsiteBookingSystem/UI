import React from 'react';
import { text, radios, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button, { Scope, Variant, Size } from './Button';

export default {
  title: 'Playground | Button',
  component: Button,
};

export const button = () => {
  const variants = {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger',
  };

  const sizes = {
    Small: 'small',
    Default: 'default',
    Large: 'large',
  };

  const scope = 'default' as Scope;
  const variant = radios('Variant', variants, 'primary') as Variant;
  const size = radios('Size', sizes, 'default') as Size;

  const props: any = {
    scope,
    variant,
    size,
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
  const variants = {
    Primary: 'primary',
    Secondary: 'secondary',
    Danger: 'danger',
  };

  const sizes = {
    Small: 'small',
    Default: 'default',
    Large: 'large',
  };

  const scope = 'rounded' as Scope;
  const variant = radios('Variant', variants, 'primary') as Variant;
  const size = radios('Size', sizes, 'default') as Size;

  const props: any = {
    scope,
    variant,
    size,
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

import React from 'react';
import { text, radios, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Input, { Type, Theme } from './Input';

export default {
  title: 'Playground | Input',
  component: Input,
};

export const input = () => {
  const types = {
    Text: 'text',
    Number: 'number',
    Password: 'password',
    Email: 'email',
    Tel: 'tel',
  };

  const themes = {
    Default: 'default',
    Primary: 'primary',
  };

  const type = radios('Type', types, 'text') as Type;
  const theme = radios('Theme', themes, 'default') as Theme;

  const props: any = {
    type,
    theme,
    label: text('Label', 'My email address'),
    placeholder: text('Placeholder', 'email@example.com'),
    required: boolean('Required ?', true),
    disabled: boolean('Disabled ?', false),
    canClear: boolean('Can clear ?', false),
    error: text('Error message', ''),
    onBlur: action('BLUR'),
    onChange: action('CHANGE'),
  };

  return (
    <div className="Container">
      <div className="Row">
        <Input {...props} />
      </div>
    </div>
  );
};

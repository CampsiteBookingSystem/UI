import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs/react';

import '../src/styles/colors.css';
import '../src/styles/fonts/open-sans.css';

import '../assets/styles/style.css';
import '../assets/styles/grid.css';
import '../assets/styles/icon.css';

addDecorator(withA11y);
addDecorator(withKnobs);

addParameters({
  options: {
    theme: create({
      base: 'light',

      brandTitle: 'Booking System UI',
      brandUrl: 'https://ui.booking-system.co',
    }),
  },
  options: {
    storySort: (a, b) => {
      if (a[1].parameters.order) {
        return a[1].parameters.order - b[1].parameters.order;
      }

      return a[1].id.localeCompare(b[1].id);
    },
  },
});

configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.tsx$/),
  ],
  module,
);

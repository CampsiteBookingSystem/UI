import React from 'react';
import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

import 'sanitize.css/sanitize.css';
import 'sanitize.css/forms.css';

import '../../src/styles/colors.css';
import '../../src/styles/fonts/open-sans.css';

import '../../assets/styles/style.css';
import '../../assets/styles/grid.css';
import '../../assets/styles/icon.css';

addParameters({
  options: {
    theme: create({
      base: 'light',

      brandTitle: 'Booking System UI',
      brandUrl: 'https://ui.booking-system.com',
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

configure([require.context('../../src', true, /\.stories\.mdx$/)], module);

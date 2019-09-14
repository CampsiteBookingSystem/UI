import * as React from 'react';
import classNames from 'classnames';

import './Spinner.css';

interface Props {
  /**
   * Aditionnal custom classes
   */
  className?: string;
  /**
   * Color of the spinner
   * @default var(--color-primary)
   */
  color?: string;
  /**
   * Size of the spinner
   * @default 20px
   */
  size?: string;
}

function Spinner(props: Props) {
  const classes = classNames('BS-Spinner', {
    [props.className]: props.className !== undefined,
  });

  return (
    <span
      className={classes}
      style={{
        width: props.size,
        height: props.size,
        borderColor: `${props.color} transparent ${props.color} ${props.color}`,
      }}
    />
  );
}

Spinner.defaultProps = {
  size: '20px',
};

export default Spinner;

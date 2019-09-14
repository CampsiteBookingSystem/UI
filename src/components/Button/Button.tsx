import * as React from 'react';
import classNames from 'classnames';

import Spinner from '../Spinner';

import './Button.css';

export type Scope = 'default' | 'rounded';
export type Type = 'primary' | 'secondary' | 'warning';

interface Props {
  /**
   * ID of the button
   */
  id?: string;
  /**
   * Aditionnal custom classes
   */
  className?: string;
  /**
   * Scope of the component
   * ["default" or "rounded"]
   * @default default
   */
  scope: Scope;
  /**
   * Type of button
   * ["primary", "secondary" or "danger"]
   * @default primary
   */
  type?: Type;
  /**
   * Is the button disabled ?
   * @default false
   */
  disabled?: boolean;
  /**
   * Show a loading indicator ?
   * @default false
   */
  loading?: boolean;
  /**
   * Action to execute on click
   */
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactChild;
}

function Button(props: Props) {
  const classes = classNames('BS-Button', {
    [props.className]: props.className !== undefined,
    [`BS-Button--${props.scope}`]: props.scope !== undefined,
    [`BS-Button--${props.type}`]: props.type !== undefined,
    'BS-Button--disabled': props.disabled,
    'BS-Button--loading': props.loading,
  });

  return (
    <button id={props.id} className={classes} onClick={props.onClick}>
      {props.children}
      <span className="BS-Button__loader">
        <Spinner size="16px" />
      </span>
    </button>
  );
}

Button.defaultProps = {
  scope: 'default',
  type: 'primary',
  disabled: false,
  loading: false,
};

export default Button;

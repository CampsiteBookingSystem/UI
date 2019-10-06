import * as React from 'react';
import classNames from 'classnames';

import Spinner from '../Spinner';

import './Button.css';

export type Type = 'button' | 'reset' | 'submit';
export type Scope = 'default' | 'rounded';
export type Variant = 'primary' | 'secondary' | 'warning';
export type Size = 'small' | 'default' | 'large';

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
   * Type of button
   * ["button", "reset" or "submit"]
   * @default button
   */
  type?: Type;
  /**
   * Scope of the component
   * ["default" or "rounded"]
   * @default default
   */
  scope?: Scope;
  /**
   * Variant of button
   * ["primary", "secondary" or "danger"]
   * @default primary
   */
  variant?: Variant;
  /**
   * Size of the button
   * ["small", "default", "large"]
   * @default default
   */
  size?: Size;
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
    [`BS-Button--${props.variant}`]: props.variant !== undefined,
    [`BS-Button--${props.size}`]: props.size !== undefined,
    'BS-Button--disabled': props.disabled,
    'BS-Button--loading': props.loading,
  });

  return (
    <button type={props.type} id={props.id} className={classes} onClick={props.onClick}>
      {props.children}
      <span className="BS-Button__loader">
        <Spinner size="16px" />
      </span>
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  scope: 'default',
  variant: 'primary',
  size: 'default',
  disabled: false,
  loading: false,
};

export default Button;

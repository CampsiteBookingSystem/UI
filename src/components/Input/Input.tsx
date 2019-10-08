import * as React from 'react';
import classNames from 'classnames';

import { Eye, Clear } from '../../icons';

import './Input.css';

export type Type = 'text' | 'number' | 'password' | 'email' | 'tel';
export type Theme = 'default' | 'primary';

interface Props {
  /**
   * ID of the input
   */
  id?: string;
  /**
   * Aditionnal custom classes
   */
  className?: string;
  /**
   * Name of the input
   */
  name: string;
  /**
   * Input type
   */
  type: Type;
  /**
   * Theme of the input
   */
  theme?: Theme;
  /**
   * Input label
   */
  label: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Initial value
   */
  initialValue?: string;
  /**
   * Is the input required?
   * @default false
   */
  required?: boolean;
  /**
   * Is the input disabled?
   * @default false
   */
  disabled?: boolean;
  /**
   * Is in error state ?
   */
  error?: boolean;
  /**
   * Error message
   */
  errorMessage?: string;
  /**
   * Error message when value is empty
   */
  emptyErrorMessage?: string;
  /**
   * Add a button to quickly clear the input?
   * @default false
   */
  canClear?: boolean;
  /**
   * Add a button to toggle the password visibility?
   * @default false
   */
  canTogglePassword?: boolean;
  /**
   * Action to execute when the value changes
   */
  onChange?: (value: string) => void;
  /**
   * Action to execute when exiting the focus of the field
   */
  onBlur?: (value: string) => void;
}

function Input(props: Props) {
  const [value, setValue] = React.useState<string>(props.initialValue);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [isFocussed, setIsFocussed] = React.useState<boolean>(false);
  const [isDirty, setIsDirty] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const [errorContainerHeight, setErrorContainerHeight] = React.useState<number>(0);

  const errorContainer = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    if (props.onChange !== undefined) {
      props.onChange(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (props.initialValue !== '') {
      setValue(props.initialValue);
    }
  }, [props.initialValue]);

  React.useEffect(() => {
    if (props.error) {
      setErrorMessage(props.errorMessage);
      setHasError(true);
    } else if (props.required && isDirty && value === '') {
      setErrorMessage(props.emptyErrorMessage);
      setHasError(true);
    } else {
      setHasError(false);
    }
  }, [props.required, props.error, props.errorMessage, props.emptyErrorMessage, isDirty, value]);

  React.useEffect(() => {
    if (errorContainer.current) {
      setErrorContainerHeight(errorContainer.current.clientHeight);
    }
  }, [errorMessage]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  function handleBlur() {
    setIsFocussed(false);
    setIsDirty(true);

    if (props.onBlur !== undefined) {
      props.onBlur(value);
    }
  }

  function handleFocus() {
    setIsFocussed(true);
  }

  function handlePasswordVisibilityClick() {
    setShowPassword(!showPassword);
  }

  function handleClearClick() {
    setValue('');
  }

  const classes = classNames('BS-Input', {
    [props.className]: props.className !== undefined,
    [`BS-Input--${props.type}`]: true,
    [`BS-Input--${props.theme}`]: true,
    'BS-Input--has-value': value.length > 0,
    'BS-Input--has-error': hasError,
    'BS-Input--is-disabled': props.disabled,
    'BS-Input--is-focussed': isFocussed,
    'BS-Input--password-is-visible': showPassword,
  });

  let type = props.type;

  if (props.type === 'password' && showPassword) {
    type = 'text';
  }

  return (
    <div
      className={classes}
      style={{
        paddingBottom: hasError && errorMessage ? `${errorContainerHeight + 4}px` : 0,
      }}
    >
      <label className="BS-Input__input-container" htmlFor={props.id}>
        <input
          className="BS-Input__input"
          id={props.id}
          name={props.id}
          type={type}
          placeholder={props.placeholder}
          disabled={props.disabled}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        <span className="BS-Input__label">{props.label}</span>
        {props.type === 'password' && (
          <button
            type="button"
            className="BS-Input__action BS-Input__action--password"
            onClick={handlePasswordVisibilityClick}
          >
            <Eye />
          </button>
        )}
        {props.type !== 'password' && props.canClear && (
          <button
            type="button"
            className="BS-Input__action BS-Input__action--clear"
            onClick={handleClearClick}
          >
            <Clear />
          </button>
        )}
      </label>
      <div ref={errorContainer} className="BS-Input__error-container">
        <p className="BS-Input__error">{errorMessage}</p>
      </div>
    </div>
  );
}

Input.defaultProps = {
  theme: 'default',
  initialValue: '',
  required: false,
  disabled: false,
  canClear: false,
  error: false,
  emptyErrorMessage: 'Ce champs est requis.',
};

export default Input;

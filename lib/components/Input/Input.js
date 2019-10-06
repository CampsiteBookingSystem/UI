import * as React from 'react';
import classNames from 'classnames';
import { Eye, Clear } from '../../icons';
import './Input.css';
function Input(props) {
    const [value, setValue] = React.useState(props.initialValue);
    const [showPassword, setShowPassword] = React.useState(false);
    const [isFocussed, setIsFocussed] = React.useState(false);
    const [isDirty, setIsDirty] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');
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
            setErrorMessage(props.error);
            setHasError(true);
        }
        else if (props.required && isDirty && value === '') {
            setErrorMessage(props.emptyErrorMessage);
            setHasError(true);
        }
        else {
            setHasError(false);
        }
    }, [props.required, props.error, props.emptyErrorMessage, isDirty, value]);
    function handleChange(event) {
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
    return (React.createElement("div", { className: classes },
        React.createElement("label", { className: "BS-Input__input-container", htmlFor: props.id },
            React.createElement("input", { className: "BS-Input__input", id: props.id, name: props.id, type: type, placeholder: props.placeholder, disabled: props.disabled, value: value, onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus }),
            React.createElement("span", { className: "BS-Input__label" }, props.label),
            props.type === 'password' && (React.createElement("button", { className: "BS-Input__action BS-Input__action--password", onClick: handlePasswordVisibilityClick },
                React.createElement(Eye, null))),
            props.type !== 'password' && props.canClear && (React.createElement("button", { className: "BS-Input__action BS-Input__action--clear", onClick: handleClearClick },
                React.createElement(Clear, null)))),
        React.createElement("div", { className: "BS-Input__error-container" },
            React.createElement("p", { className: "BS-Input__error" }, errorMessage))));
}
Input.defaultProps = {
    initialValue: '',
    required: false,
    disabled: false,
    canClear: false,
    emptyErrorMessage: 'Ce champs est requis.',
};
export default Input;
//# sourceMappingURL=Input.js.map
import * as React from 'react';
import classNames from 'classnames';
import Spinner from '../Spinner';
import './Button.css';
function Button(props) {
    const classes = classNames('BS-Button', {
        [props.className]: props.className !== undefined,
        [`BS-Button--${props.scope}`]: props.scope !== undefined,
        [`BS-Button--${props.variant}`]: props.variant !== undefined,
        [`BS-Button--${props.size}`]: props.size !== undefined,
        'BS-Button--disabled': props.disabled,
        'BS-Button--loading': props.loading,
    });
    return (React.createElement("button", { type: props.type, id: props.id, className: classes, onClick: props.onClick },
        props.children,
        React.createElement("span", { className: "BS-Button__loader" },
            React.createElement(Spinner, { size: "16px" }))));
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
//# sourceMappingURL=Button.js.map
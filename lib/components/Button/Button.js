import * as React from 'react';
import classNames from 'classnames';
import './Button.css';
function Button(props) {
    const classes = classNames('BS-Button', {
        [props.className]: props.className !== undefined,
        [`BS-Button--${props.scope}`]: props.scope !== undefined,
        [`BS-Button--${props.type}`]: props.type !== undefined,
        'BS-Button--disabled': props.disabled,
        'BS-Button--loading': props.loading,
    });
    return (React.createElement("button", { id: props.id, className: classes, onClick: props.onClick }, props.children));
}
Button.defaultProps = {
    scope: 'default',
    type: 'primary',
    disabled: false,
    loading: false,
};
export default Button;
//# sourceMappingURL=Button.js.map
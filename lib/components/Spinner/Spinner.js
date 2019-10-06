import * as React from 'react';
import classNames from 'classnames';
import './Spinner.css';
function Spinner(props) {
    const classes = classNames('BS-Spinner', {
        [props.className]: props.className !== undefined,
    });
    return (React.createElement("span", { className: classes, style: {
            width: props.size,
            height: props.size,
            borderColor: `${props.color} transparent ${props.color} ${props.color}`,
        } }));
}
Spinner.defaultProps = {
    size: '20px',
};
export default Spinner;
//# sourceMappingURL=Spinner.js.map
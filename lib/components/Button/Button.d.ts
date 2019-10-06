import * as React from 'react';
import './Button.css';
export declare type Scope = 'default' | 'rounded';
export declare type Type = 'primary' | 'secondary' | 'warning';
export declare type Size = 'small' | 'default' | 'large';
interface Props {
    id?: string;
    className?: string;
    scope: Scope;
    type?: Type;
    size?: Size;
    disabled?: boolean;
    loading?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactChild;
}
declare function Button(props: Props): JSX.Element;
declare namespace Button {
    var defaultProps: {
        scope: string;
        type: string;
        size: string;
        disabled: boolean;
        loading: boolean;
    };
}
export default Button;

import * as React from 'react';
import './Button.css';
export declare type Type = 'button' | 'reset' | 'submit';
export declare type Scope = 'default' | 'rounded';
export declare type Variant = 'primary' | 'secondary' | 'warning';
export declare type Size = 'small' | 'default' | 'large';
interface Props {
    id?: string;
    className?: string;
    type?: Type;
    scope?: Scope;
    variant?: Variant;
    size?: Size;
    disabled?: boolean;
    loading?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactChild;
}
declare function Button(props: Props): JSX.Element;
declare namespace Button {
    var defaultProps: {
        type: string;
        scope: string;
        variant: string;
        size: string;
        disabled: boolean;
        loading: boolean;
    };
}
export default Button;

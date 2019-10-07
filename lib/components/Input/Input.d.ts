/// <reference types="react" />
import './Input.css';
export declare type Type = 'text' | 'number' | 'password' | 'email' | 'tel';
export declare type Theme = 'default' | 'primary';
interface Props {
    id?: string;
    className?: string;
    name: string;
    type: Type;
    theme?: Theme;
    label: string;
    placeholder?: string;
    initialValue?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    emptyErrorMessage?: string;
    canClear?: boolean;
    canTogglePassword?: boolean;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
}
declare function Input(props: Props): JSX.Element;
declare namespace Input {
    var defaultProps: {
        theme: string;
        initialValue: string;
        required: boolean;
        disabled: boolean;
        canClear: boolean;
        emptyErrorMessage: string;
    };
}
export default Input;

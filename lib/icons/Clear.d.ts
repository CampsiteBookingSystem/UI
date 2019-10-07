/// <reference types="react" />
import './Icon.css';
interface Props {
    className?: string;
    color?: string;
    width?: string;
    height?: string;
}
declare function Clear(props: Props): JSX.Element;
declare namespace Clear {
    var defaultProps: {
        color: string;
        width: string;
        height: string;
    };
}
export default Clear;

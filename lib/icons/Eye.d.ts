import './Icon.css';
interface Props {
    className?: string;
    color?: string;
    width?: string;
    height?: string;
}
declare function Eye(props: Props): JSX.Element;
declare namespace Eye {
    var defaultProps: {
        color: string;
        width: string;
        height: string;
    };
}
export default Eye;

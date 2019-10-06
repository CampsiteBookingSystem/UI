import './Spinner.css';
interface Props {
    className?: string;
    color?: string;
    size?: string;
}
declare function Spinner(props: Props): JSX.Element;
declare namespace Spinner {
    var defaultProps: {
        size: string;
    };
}
export default Spinner;

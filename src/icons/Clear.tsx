import * as React from 'react';
import classNames from 'classnames';

import './Icon.css';

interface Props {
  /**
   * Aditionnal custom classes
   */
  className?: string;
  /**
   * Color of the icon
   * @default #FFFFFF
   */
  color?: string;
  /**
   * Width (without the unit)
   */
  width?: string;
  /**
   * Height (without the unit)
   */
  height?: string;
}

function Clear(props: Props) {
  const classes = classNames('BS-Icon', props.className);

  return (
    <div className={classes}>
      <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 17 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="BS-Icon__fill" fill={props.color} fillRule="nonzero">
          <path d="M9.4,8 L15.8,1.6 C16.2,1.2 16.2,0.6 15.8,0.3 C15.4,-0.1 14.8,-0.1 14.5,0.3 L8,6.7 L1.6,0.3 C1.2,0 0.6,0 0.3,0.4 C0,0.8 0,1.3 0.3,1.6 L6.7,8 L0.3,14.4 C-0.1,14.8 -0.1,15.4 0.3,15.7 C0.7,16.1 1.3,16.1 1.6,15.7 L1.6,15.7 L8,9.3 L14.4,15.7 C14.8,16.1 15.4,16.1 15.7,15.7 C16.1,15.3 16.1,14.7 15.7,14.4 L9.4,8 Z" />
        </g>
      </svg>
    </div>
  );
}

Clear.defaultProps = {
  color: '#FFFFFF',
  width: '17',
  height: '16',
};

export default Clear;

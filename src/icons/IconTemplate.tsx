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

function IconTemplate(props: Props) {
  const classes = classNames('BS-Icon', props.className);

  return (
    <div className={classes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 19 14"
      >
        <path className="BS-Icon__fill" fill={props.color} fillRule="evenodd" />
      </svg>
    </div>
  );
}

IconTemplate.defaultProps = {
  color: '#FFFFFF',
  width: '19',
  height: '14',
};

export default IconTemplate;

import React, { Component } from 'react';

import styles from './ScrollIcon.module.scss';

export default class ScrollIcon extends Component {
    render() {
        return (
            // <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg">
            //     <path fillRule="evenodd" fill="rgb(48, 48, 48)" d="M7.76,37.584 L8.37,36.658 L13.477,29.812 L11.556,27.952 L8.437,30.960 L8.437,0.784 L5.717,0.784 L5.717,30.960 L2.597,27.952 L0.677,29.812 L6.116,36.658 L7.76,37.584 Z"></path>
            // </svg>

            <svg className={styles.icon} viewBox="0 0 14 38" >
              <path fillRule="evenodd" fill="rgb(48, 48, 48)" d="M7.76,37.584 L8.37,36.658 L13.477,29.812 L11.556,27.952 L8.437,30.960 L8.437,0.784 L5.717,0.784 L5.717,30.960 L2.597,27.952 L0.677,29.812 L6.116,36.658 L7.76,37.584 Z"></path>
           </svg>
        );
    }
}

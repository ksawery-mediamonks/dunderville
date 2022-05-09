import React, { Component, createRef } from 'react';
import { gsap } from "gsap";

import styles from './ScrollIcon.module.scss';

export default class ScrollIcon extends Component {
    constructor(props) {
        super(props);

        this.ui = {
            icon: createRef()
        };
    }

    componentDidMount() {
        this._setupEventListener();
    }

    componentWillUnmount() {
        this._removeEventListener();
    }

    render() {
        return (
            <svg className={styles.icon} ref={this.ui.icon} viewBox="0 0 14 38" >
              <path fill="rgb(48, 48, 48)" d="M7.76,37.584 L8.37,36.658 L13.477,29.812 L11.556,27.952 L8.437,30.960 L8.437,0.784 L5.717,0.784 L5.717,30.960 L2.597,27.952 L0.677,29.812 L6.116,36.658 L7.76,37.584 Z"></path>
           </svg>
        );
    }

    _setupEventListener() {
        window.addEventListener('load', this._animateIcon());
    }

    _removeEventListener() {
        window.removeEventListener('load', this._animateIcon());
    }

    _animateIcon() {
        const icon = this.ui.icon.current;
        const timeline = gsap.timeline({ repeat: -1, yoyo: true, ease: "power2.inOut" });

        timeline.fromTo(
            icon, { y: 15}, { y: 0, duration: 1 }
        );
    }
}


import React, { Component, createRef } from 'react';
import { gsap } from "gsap";

import styles from './MenuOverlay.module.scss';

import Navigation from 'components/Navigation';
import Banner from 'components/Banner';

export default class MenuOverlay extends Component {
    constructor(props) {
        super(props);

        this.ui = {
            overlay: createRef(),
            banner: createRef(),
        };
    }

    componentDidMount() {
        this._mountAnimation();
    }

    componentWillUnmount() {
        this._unmountAnimation();
    }

    render() {
        const { t, router } = this.props;
    
        return (
            <div className={styles.overlay} ref={this.ui.overlay}>
                <div className={styles.wrapper}>
                    <div ref={this.ui.banner}>
                        <Banner inverted />
                    </div>
                    <Navigation inverted t={t} router={router} />
                </div>
            </div>
        );
    }

    _mountAnimation = () => {
        const timelineOverlay = gsap.timeline();
        const overlay = this.ui.overlay.current;
        const banner = this.ui.banner.current;

        timelineOverlay.fromTo(overlay, { y: "-100%" }, { y: "0", duration: 1, ease: "power3.inOut" });
        timelineOverlay.fromTo(banner, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, ease: "power3.inOut" });
    };

    _unmountAnimation = () => {
        console.log('unmount animation')
        const timelineOverlay = gsap.timeline();
        const overlay = this.ui.overlay.current;

        timelineOverlay.fromTo(overlay, { y: "-100%" }, { y: "0", duration: 2, ease: "power3.inOut" });
    };
}


import React, { Component, createRef } from 'react';
import { gsap } from "gsap";

import classNames from 'classnames';
import { resizeManager } from '@superherocheesecake/next-resize-manager';
import { isFunction } from 'utils/helpers'

import styles from './Banner.module.scss';

export default class Banner extends Component {
    ui = {
        letterU1: createRef(),
        letterU2: createRef(),
        letterN1: createRef(),
        letterN2: createRef(),
        letterD: createRef(),
        letterEline: createRef(),
        letterR: createRef(),
        letterV: createRef(),
        letterI1: createRef(),
        letterI2: createRef(),
        letterL: createRef(),
        letterE: createRef(),
        //ui marquee
        marquee: createRef(),
        line: createRef(),
        label: createRef()
    };

    _multiplier = 1;

    componentDidMount() {
        this._setupEventListeners();
        this._resize();

        this._introAnimation();
    }

    componentWillUnmount() {
        this._killTimelines();
    }

    render() {
        const { inverted } = this.props;

        return (
            <div ref={this.ui.marquee} className={styles.banner}>
                <div ref={this.ui.line} className={styles.wrapper}>
                    <svg ref={this.ui.label} className={classNames(styles.svg, inverted ? 'is-inverted' : '')} viewBox="0 0 283.1 35.9">
                            <defs>
                                <clipPath id="clipPath">
                                    <rect x="142" y="0" width="30" height="40" />
                                </clipPath>
                            </defs>
                            {/* E */}
                            <polygon ref={this.ui.letterE} points="283.1,30.3 283.1,35.6 261.2,35.6 261.2,0.1 283.1,0.1 283.1,5.1 266.1,5.1 266.1,11.3 278.8,11.3   278.8,16.2 266.1,16.2 266.1,30.3 "></polygon>
                            <rect x="261.2" y="30.3" width="22.5" height="6"></rect>
                            {/* L */}
                            <polygon points="211.9,35.4 211.9,30.4 211.9,0.1 216.9,0.1 216.9,30.4 233.2,30.4 233.2,35.4 216.9,35.4 "></polygon>
                            {/* L */}
                            <polygon ref={this.ui.letterL} points="236.5,35.4 236.5,30.4 236.5,0.1 241.5,0.1 241.5,30.4 257.8,30.4 257.8,35.4 241.5,35.4 " data-svg-origin="236.5 0.10000000149011612"></polygon>
                            {/* I */}
                            <rect ref={this.ui.letterI2} x="202.9" y="0" width="5" height="35.3" data-svg-origin="202.89999389648438 0.10000000149011612"></rect>
                            <rect className={styles.lineI} ref={this.ui.letterI1} x="202.9" y="0" width="6" height="5.3" data-svg-origin="202.89999389648438 0.10000000149011612"></rect>
                            {/* V */}
                            <path ref={this.ui.letterV} d="M181.5,35.7c0,0-16.1-35.4-16.1-35.7h6l11.3,25.9l11-25.9h6.4L184,35.7H181.5z" data-original="M173.06,38.42S165.3.29,165.37,0l5.84,1.35,5.22,27.77L193,6.37l6.27,1.45L175.46,39Z"></path>
                            {/* <path d="M181.5,35.7c0,0-16.1-35.4-16.1-35.7h6l11.3,25.9l11-25.9h6.4L184,35.7H181.5z"></path> */}
                            {/* R */}
                            <use clipPath="url(#clipPath)" href="#r">
                                <path ref={this.ui.letterR} id="r" d="M157.7,15.9c1.9-0.2,6.3-1.5,6.3-7.9c0-8.1-7.4-8-7.4-8h-11.2v35.5h4.9V15.9h2.1c0.8,0.8,13.6,19.5,13.6,19.5h5.9  L157.7,15.9z M150.2,11.4V4.6h6.1c0,0,2.7,0.1,2.7,3.4s-2.5,3.4-2.5,3.4L150.2,11.4z"  data-svg-origin="145.40000915527344 -0.000058650970458984375" transform="matrix(1,0,0,1,0,0)"></path>
                            </use>
                            {/* E */}
                            {/* <path d="M124.8,5.1v6.2h12.7v4.9h-12.7v14.1h17v5.3H120V0.1h21.8v5H124.8z"></path> */}
                            <rect ref={this.ui.letterEline} x="120.1" y="11.2" width="17.6" height="5"></rect>
                            {/* <polygon points="21.8 0 0 0 0 35.5 21.8 35.5 21.8 30.2 4.8 30.2 4.8 16.1 4.81 16.1 4.81 11.2 4.8 11.2 4.8 5 21.8 5 21.8 0"/> */}
                            <polygon points="141.8 0 120 0 120 35.5 141.8 35.5 141.8 30.2 124.8 30.2 124.8 16.1 124.81 16.1 124.81 11.2 124.8 11.2 124.8 5 141.8 5 141.8 0"/>
                            {/*  D */}
                            <path ref={this.ui.letterD} d="M99,0.1l-4.9,0.1v28h4.5c0,0,18,1.4,18-14C116.6-1.8,99,0.1,99,0.1z M109,21c-3.2,2.8-8.4,2.7-10.1,2.5V4.6  c1.7-0.1,6.9-0.3,10.1,2.6c1.9,1.8,2.9,4.3,2.8,6.9C111.9,16.7,110.9,19.2,109,21z" data-svg-origin="94.0999984741211 0.030020713806152344" transform="matrix(1,0,0,1,0,0)"></path>
                            <rect x="94.1" y="30.8" width="22.5" height="6"></rect>
                            {/*  N */}
                            <polygon ref={this.ui.letterN2} points="66.4,10.3 66.4,35.9 61.1,35.9 61.1,0 64.3,0 85.3,25 85.3,0 90.7,0 90.7,35.9 87.6,35.9 " data-svg-origin="61.099998474121094 0" transform="matrix(1,0,0,1,0,0)"></polygon>
                            <polygon ref={this.ui.letterN1} points="66.4,10.3 66.4,35.9 61.1,35.9 61.1,0 64.3,0 85.3,25 85.3,0 90.7,0 90.7,35.9 87.6,35.9 " data-svg-origin="61.099998474121094 0" transform="matrix(1,0,0,1,0,36.9)"></polygon>
                            {/* U */}
                            <path ref={this.ui.letterU2} d="M46.7,35.7h-3.5c-7.1,0-10.5-5.7-10.5-11.4V0h5.1v23.9c0,6.8,7.2,6.7,7.2,6.7s7.2,0.3,7.2-6.5V0h5.1v24.4  C57.2,30.1,53.8,35.7,46.7,35.7z" data-svg-origin="32.70000076293945 0" transform="matrix(1,0,0,1,0,-36.9)"></path>
                            <path ref={this.ui.letterU1} d="M46.7,35.7h-3.5c-7.1,0-10.5-5.7-10.5-11.4V0h5.1v23.9c0,6.8,7.2,6.7,7.2,6.7s7.2,0.3,7.2-6.5V0h5.1v24.4  C57.2,30.1,53.8,35.7,46.7,35.7z" data-svg-origin="32.70000076293945 0" transform="matrix(1,0,0,1,0,0)" ></path>
                            {/* D */}
                            <path d="M6.2,0.1L0,0.2v35.6h5.8c0,0,22.8,1.7,22.8-17.8C28.6-2.3,6.2,0.1,6.2,0.1z M5.2,30.6V5.1  c0,0,18.1-2.5,18.1,12.8S5.2,30.6,5.2,30.6z"></path>
                    </svg>
                </div>
            </div>
        );
    }

    _setupEventListeners() {
        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);
    }
    
    _removeEventListeners() {
        resizeManager.removeEventListener('resize', this._resizeHandler);
        resizeManager.removeEventListener('resize:complete', this._resizeHandler);
    }

    _resize() {
        console.log('resize');
    }

    _killTimelines() {
        if (this._tlBanner) {
            this._tlBanner.kill();
            this._tlBanner = null;
        }
    }

    _animateBanner() {
        this._tlBanner = gsap.timeline({ delay: 0.16 });
        // //!TODO: just one timeline, call oncomplete function reveal (boolean)
        this._tlBanner.fromTo(this.ui.letterU1.current, { y: -8 }, { y: "-101%", duration: 0.54, ease: "power3.inOut" });
        this._tlBanner.fromTo(this.ui.letterU2.current, { y: 29 }, { y: 0, duration: 0.54, ease: "power3.inOut"}, "-=0.54");
        this._tlBanner.fromTo(this.ui.letterEline.current, { y: 10 }, { y: 0, duration: 0.4, ease: "back.out" });
        this._tlBanner.fromTo(this.ui.letterV.current, {transformOrigin: "18% 35%", rotate: 23}, { rotate: "0", duration: 0.16, ease: "power3.inOut"});
        this._tlBanner.fromTo(this.ui.letterEline.current, { y: -4 }, { y: 10, duration: 0.36, ease: "power1.inOut"}, 0);
        this._tlBanner.fromTo(this.ui.letterD.current, { y: "110%" }, { y: 0, duration: 0.54, ease: "back.out(1.7)"}, 0);
        this._tlBanner.fromTo(this.ui.letterI1.current, { y: 30 }, { y: -6, duration: 1, ease: "power3.out"}, 0);
        // this._tlBanner.fromTo(this.ui.letterI2.current, { y: 23 }, { y: 0, duration: 1, ease: "power3.out"}, 0);
        this._tlBanner.fromTo(this.ui.letterR.current, { x: -30 }, { x: 0, duration: 0.6, ease: "power3.inOut"}, 0.13);
        this._tlBanner.fromTo(this.ui.letterL.current, { x: -17.5 }, { x: 0, duration: 0.83, ease: "power3.inOut"}, 0.13);
        this._tlBanner.fromTo(this.ui.letterE.current, {y: 12 }, { y: 0, duration: 0.4, ease: "power3.inOut"}, 0.54);
        this._tlBanner.fromTo(this.ui.letterN1.current, { y: -7 }, { y: 0, duration: 0.16, ease: "power1.in"}, 1.48);
        this._tlBanner.fromTo(this.ui.letterN2.current, { y: 32 }, { y: "100%", duration: 0.16, ease: "power1.in"}, 1.48);
    
        this._tlBanner.timeScale(0.3);	
        //GSDevTools.create();
    }

    _introAnimation() {
        this._tlIntro= gsap.timeline({ delay: 0.16 });

        this._tlIntro.from(this.ui.label.current, { y: 50, onComplete: this._animateBanner() });
    }

    _resizeHandler = () => {
        this._resize();
    }
}

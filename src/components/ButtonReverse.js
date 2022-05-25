import React, { Component, createRef } from 'react';
import { gsap } from "gsap";

import styles from './ButtonReverse.module.scss';

import Button from 'components/Button';
import { isFunction } from 'utils/helpers';

export default class ButtonReverse extends Component {

    ui = {
        button: createRef(),
        buttonText: createRef(),
        section: createRef(),
        buttonBackground: createRef(),
        buttonIcon: createRef(),
        bioImage: createRef(),
    };

    componentDidMount() {
        this._setupAnimations();
    }

    componentWillUnmount() {
        this._killTimelines();
    }

    render() {
        //const { overlayMenuVisible } = this.props;
        
        return (
            <Button ref={this.ui.button} className={styles.button} onClick={this._handleButtonClick}>
                <svg ref={this.ui.buttonText} className={styles.buttonText} viewBox="0 0 106.14 106.13">
                    <text transform="rotate(-126.15 30.4834 35.7603)">
                    <tspan x="0" y="0">H</tspan>
                    </text><text transform="rotate(-113.41 31.181 32.0585)">
                    <tspan x="0" y="0">I</tspan>
                    </text><text transform="rotate(-100.58 32.0234 27.755)">
                        <tspan x="0" y="0">T</tspan>
                    </text>
                    <text transform="rotate(-87.96 32.9262 22.5784)">
                        <tspan x="0" y="0"></tspan>
                    </text>
                    <text transform="rotate(-75.3 34.148 16.1204)">
                        <tspan x="0" y="0">M</tspan>
                    </text>
                    <text transform="rotate(-62.49 35.8096 7.3952)">
                        <tspan x="0" y="0">E</tspan></text>
                    <text transform="rotate(-49.81 38.1482 -5.249)">
                        <tspan x="0" y="0"></tspan></text>
                    <text transform="rotate(-37.18 41.9498 -25.6872)">
                        <tspan x="0" y="0">-</tspan></text>
                    <text transform="rotate(-24.48 49.5218 -66.5297)">
                        <tspan x="0" y="0"></tspan>
                    </text>
                    <text transform="rotate(-11.7 73.5261 -194.4517)">
                        <tspan x="0" y="0">B</tspan></text>
                        <text transform="rotate(.95 -532.5872 3053.8968)"><tspan x="0" y="0">R</tspan></text>
                        <text transform="rotate(13.67 -10.61 256.3818)"><tspan x="0" y="0">I</tspan></text>
                        <text transform="rotate(26.47 8.416 154.259)"><tspan x="0" y="0">N</tspan></text>
                        <text transform="rotate(39.19 15.1003 118.3478)"><tspan x="0" y="0">G</tspan></text>
                        <text transform="rotate(51.84 18.5424 99.727)"><tspan x="0" y="0"></tspan>
                        </text><text transform="rotate(64.49 20.7577 87.9348)"><tspan x="0" y="0">T</tspan>
                        </text><text transform="rotate(77.32 22.3577 79.5296)"><tspan x="0" y="0">H</tspan>
                        </text><text transform="rotate(90.93 23.9162 72.5751)"><tspan x="0" y="0">E</tspan>
                        </text><text transform="rotate(102.64 24.3798 68.3929)"><tspan x="0" y="0"> </tspan>
                        </text><text transform="rotate(115.42 25.2219 64.1525)"><tspan x="0" y="0">D</tspan>
                        </text><text transform="rotate(128.16 25.8951 60.5189)"><tspan x="0" y="0">U</tspan>
                        </text><text transform="rotate(140.81 26.471 57.2922)"><tspan x="0" y="0">N</tspan>
                        </text><text transform="rotate(153.53 27.0287 54.2841)"><tspan x="0" y="0">D</tspan>
                        </text><text transform="rotate(166.38 27.6021 51.3925)"><tspan x="0" y="0">E</tspan>
                        </text><text transform="rotate(179.07 28.1073 48.6213)"><tspan x="0" y="0">R</tspan>
                        </text><text transform="rotate(-155.54 29.1618 43.0286)"><tspan x="0" y="0">-</tspan>
                        </text><text transform="rotate(-168.3 28.5772 45.864)"><tspan x="0" y="0"> </tspan>
                    </text>
                </svg>
                <div className={styles.buttonBackground}></div>
                <svg className={styles.buttonIcon} viewBox="0 0 20 53">
                    <path d="M1.000,0.800 L0.443,33.709 L6.950,34.774 L6.600,52.601 L19.200,26.001 L10.800,26.001 L17.800,7.800 L1.000,0.800 Z"></path>
                </svg>
            </Button>
        );
    }

    _setupAnimations() {
        this._animateButtonText();
    }

    _animateButtonText() {
        this._tlButtonTextRotation = gsap.timeline();
        this._tlButtonTextRotation.fromTo(this.ui.button.current.ui.button.current.children[0], { rotation: "0" }, { rotation: "360", repeat: -1, ease: "none", duration: 7 });
    }

    _animateButtonCicked() {
        this._tlButtonClicked = gsap.timeline();
        this._tlButtonClicked.fromTo(this.ui.button.current.ui.button.current.children[0], { fill: "#f8bebe" }, {fill: "#303030", ease: "none", duration: 0.2}, 0.6);
        this._tlButtonClicked.fromTo(this.ui.button.current.ui.button.current.children[1], { backgroundColor: "#303030" }, { backgroundColor: "#f8bebe", ease: "power1", duration: 0.2 }, 0.2);
        this._tlButtonClicked.fromTo(this.ui.button.current.ui.button.current.children[2], { fill: "white" }, {fill: "black", ease: "power1", duration: 0.2}, 0.4);
    }

    _handleButtonClick = () => {
        this._animateButtonCicked();

        const { onButtonReverseClicked, isInverted } = this.props;
        if (onButtonReverseClicked && isFunction(onButtonReverseClicked)) {
            onButtonReverseClicked(!isInverted);
        }
    }

    _killTimelines() {
        if (this._tlButtonTextRotation) {
            this._tlButtonTextRotation.kill();
            this._tlButtonTextRotation = null;
        }
        if (this._tlButtonClicked) {
            this._tlButtonClicked.kill();
            this._tlButtonClicked = null;
        }
    }
}


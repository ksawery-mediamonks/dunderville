import React, { Component, createRef } from 'react';
import { gsap } from "gsap";

import styles from './SectionUs.module.scss';

import SubHeading from 'components/SubHeading';
import Button from 'components/Button';

export default class SectionUs extends Component {
    constructor(props) {
        super(props);

        this.ui = {
            buttonText: createRef(),
            buttonBackground: createRef(),
            buttonIcon: createRef()
        };

        this.components = {}
        this.components.buttons = props.t('us:bio', { returnObjects: true }).map(() => createRef());
    }

    componentDidMount() {
        this._setupEventListener();
    }

    componentWillUnmount() {
        this._removeEventListener();
    }

    render() {
        const { t } = this.props;

        return (
            <section className={styles.section}>
                <SubHeading title={t('us:title')} />
                <div className={styles['bio-container']}>
                    {t('us:bio', { returnObjects: true }).map((item, index) => {
                        return (
                            // <Bi o/>
                            <div className={styles.bio} key={item.key}>
                                <h2 className={styles['bio__fullname']}>{item.fullname}</h2>
                                <h3 className={styles['bio__role']}>{item.role}</h3>
                                <div className={styles['bio__image-container']}>
                                    <img className={styles['bio__image']} src={item.img} alt={item.imgalt}></img>
                                    <Button href="/" ref={this.components.buttons[index]} className={styles['bio__button']}>
                                        <svg className={styles['bio__button-text']} viewBox="0 0 106.14 106.13">
                                            <text transform="rotate(-126.15 30.4834 35.7603)">
                                            <tspan x="0" y="0">H</tspan>
                                            </text><text transform="rotate(-113.41 31.181 32.0585)">
                                            <tspan x="0" y="0">I</tspan>
                                            </text><text transform="rotate(-100.58 32.0234 27.755)">
                                                <tspan x="0" y="0">T</tspan>
                                            </text>
                                            <text transform="rotate(-87.96 32.9262 22.5784)">
                                                <tspan x="0" y="0"> </tspan>
                                            </text>
                                            <text transform="rotate(-75.3 34.148 16.1204)">
                                                <tspan x="0" y="0">M</tspan>
                                            </text>
                                            <text transform="rotate(-62.49 35.8096 7.3952)">
                                                <tspan x="0" y="0">E</tspan></text>
                                            <text transform="rotate(-49.81 38.1482 -5.249)">
                                                <tspan x="0" y="0"> </tspan></text>
                                            <text transform="rotate(-37.18 41.9498 -25.6872)">
                                                <tspan x="0" y="0">-</tspan></text>
                                            <text transform="rotate(-24.48 49.5218 -66.5297)">
                                                <tspan x="0" y="0"> </tspan>
                                            </text>
                                            <text transform="rotate(-11.7 73.5261 -194.4517)">
                                                <tspan x="0" y="0">B</tspan></text><text transform="rotate(.95 -532.5872 3053.8968)"><tspan x="0" y="0">R</tspan></text><text transform="rotate(13.67 -10.61 256.3818)"><tspan x="0" y="0">I</tspan></text><text transform="rotate(26.47 8.416 154.259)"><tspan x="0" y="0">N</tspan></text><text transform="rotate(39.19 15.1003 118.3478)"><tspan x="0" y="0">G</tspan></text><text transform="rotate(51.84 18.5424 99.727)"><tspan x="0" y="0"> </tspan></text><text transform="rotate(64.49 20.7577 87.9348)"><tspan x="0" y="0">T</tspan></text><text transform="rotate(77.32 22.3577 79.5296)"><tspan x="0" y="0">H</tspan></text><text transform="rotate(90.93 23.9162 72.5751)"><tspan x="0" y="0">E</tspan></text><text transform="rotate(102.64 24.3798 68.3929)"><tspan x="0" y="0"> </tspan></text><text transform="rotate(115.42 25.2219 64.1525)"><tspan x="0" y="0">D</tspan></text><text transform="rotate(128.16 25.8951 60.5189)"><tspan x="0" y="0">U</tspan></text><text transform="rotate(140.81 26.471 57.2922)"><tspan x="0" y="0">N</tspan></text><text transform="rotate(153.53 27.0287 54.2841)"><tspan x="0" y="0">D</tspan></text><text transform="rotate(166.38 27.6021 51.3925)"><tspan x="0" y="0">E</tspan></text><text transform="rotate(179.07 28.1073 48.6213)"><tspan x="0" y="0">R</tspan></text><text transform="rotate(-168.3 28.5772 45.864)"><tspan x="0" y="0"> </tspan></text><text transform="rotate(-155.54 29.1618 43.0286)"><tspan x="0" y="0">-</tspan></text>
                                        </svg>
                                        <div className={styles['bio__button-background']}></div>
                                        <svg className={styles['bio__button-icon']} viewBox="0 0 20 53">
                                            <path d="M1.000,0.800 L0.443,33.709 L6.950,34.774 L6.600,52.601 L19.200,26.001 L10.800,26.001 L17.800,7.800 L1.000,0.800 Z"></path>
                                        </svg>
                                    </Button>
                                </div>
                                <p className={styles['bio__description']}>{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }

    _setupEventListener() {
        this._animateButton();
    }

    _removeEventListener() {
        window.removeEventListener('load', this._animateButton);
    }

    _animateButton = () => {
        const buttons = this.components.buttons.map((item) => item.current.ui.button.current);
        
        console.log(buttons);

        // const timeline = gsap.timeline();

        // console.log(timeline);
        // timeline.fromTo(button, {x: -100}, {duration: 1, x: 100});
        //const timeline = gsap.timeline();

        //gsap.to(button, {x: 100, duration: 1});
        

        // timeline.fromTo(
        //     button, { y: 155}, { y: 0, duration: 1, opacity: 1, ease: "power4.out" }
        // );
    };
}


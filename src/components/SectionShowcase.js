import React, { Component, createRef } from 'react';
import { gsap } from "gsap";

import Button from 'components/Button';
import styles from './SectionShowcase.module.scss';

export default class SectionShowcase extends Component {
    constructor(props) {
        super(props);

        this.ui = {
            overlay: createRef(),
            button: createRef()
        };
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
            <section className={styles['section']}>
                <div className={styles['section__title']}>{t('home:section-showcase.title')}</div>
                <ol className={styles.list}>
                    {t('home:section-showcase.list', { returnObjects: true }).map((item, index) => {
                        return (
                            <li className={styles.item} key={index} >
                                <Button className={styles['button-case']} href={item.href}>
                                    <div className={styles['button-case__number']}>{item.number}</div>
                                    <div className={styles['button-case__title']}>{item.title}</div>
                                    <svg className={styles['button-case__icon']} viewBox="0 0 26 9">
                                        <path d="M0.211,3.435 L17.800,3.338 C17.800,2.038 17.795,1.288 17.749,0.133 C20.535,1.604 22.969,2.870 25.789,4.137 C23.030,5.495 20.615,6.731 17.749,8.142 C17.889,6.886 17.800,6.319 17.800,4.937 L0.211,4.746 L0.211,3.435 Z"></path>
                                    </svg>
                                </Button>
                            </li>
                        );
                    })}
                    <li className={styles.item} ref={this.ui.button}>
                        <div className={styles.itemOverlay} ref={this.ui.overlay}></div>
                        <Button className={styles['button-case']} href={t('home:section-showcase.full-list.href')}>
                            <div className={styles['button-case__title']}>{t('home:section-showcase.full-list.title')}</div>
                            <svg className={styles['button-case__icon']} viewBox="0 0 26 9">
                                <path d="M0.211,3.435 L17.800,3.338 C17.800,2.038 17.795,1.288 17.749,0.133 C20.535,1.604 22.969,2.870 25.789,4.137 C23.030,5.495 20.615,6.731 17.749,8.142 C17.889,6.886 17.800,6.319 17.800,4.937 L0.211,4.746 L0.211,3.435 Z"></path>
                            </svg>
                        </Button>
                    </li>
                </ol>
            </section>
        );
    }

    _setupEventListener() {
        this.ui.button.current.addEventListener('mouseenter', this._startOverlayAnimation);
        this.ui.button.current.addEventListener('mouseleave', this._endOverlayAnimation);
    }

    _removeEventListener() {
        this.ui.button.current.removeEventListener('mouseenter', this._startOverlayAnimation);
        this.ui.button.current.removeEventListener('mouseleave', this._endOverlayAnimation);
    }

    _startOverlayAnimation = () => {
        const overlay = this.ui.overlay.current;
        const timeline = gsap.timeline();

        timeline.fromTo(
            overlay, { y: 0}, { y: "-100%", duration: 0.4, ease: "power1.out" }
        );
    };

    _endOverlayAnimation = () => {
        const overlay = this.ui.overlay.current;
        const timeline = gsap.timeline();

        timeline.fromTo(
            overlay, { y: "-100%"}, { y: 0, duration: 0.4, ease: "power1.out" }
        );
    };
}


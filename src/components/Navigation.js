import React, { Component, createRef } from 'react';
import Button from 'components/Button';

import classNames from 'classnames';
import styles from './Navigation.module.scss';

import { gsap } from "gsap";
import { toRoman } from 'utils/NumberToRoman';

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.ui = {
            link: createRef()
        };

        this.components = {}
        this.components.links = props.t('header:navigation', { returnObjects: true }).map(() => createRef());
    }

    componentDidMount() {
        this._mountAnimation();
    }

    componentWillUnmount() {
        this._unmountAnimation();
    }

    render() {
        const { t, router, inverted } = this.props;

        //state class - modifier
        return (
            <nav className={styles.navigation}>
                <ol className={classNames(styles.list, inverted ? 'is-inverted' : '')} ref={this.el}>
                    {t('header:navigation', { returnObjects: true }).map((item, index) => {
                        return (
                            <li className={styles.item} key={index} ref={this.components.links[index]}>
                                <Button className={classNames(styles.button, router === item.button.href ? 'is-active' : '')} href={item.button.href} >
                                    <span className={styles.order}>{toRoman(index + 1)}.</span>
                                    <span className={styles.label}>{item.button.copy}</span>
                                </Button>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        );
    }

    _mountAnimation = () => {
        const timelineOverlay = gsap.timeline();
        const links = this.components.links.map((item) => item.current);

        if (this.props.inverted) {
            timelineOverlay.fromTo(links, { opacity: 0, autoAlpha: 0 }, { opacity: 1, autoAlpha: 1,  duration: 0.4, ease: "power3.inOut", stagger: 0.25 }, 1);
        }
    };

    _unmountAnimation = () => {
        console.log("unmount")
    };
}

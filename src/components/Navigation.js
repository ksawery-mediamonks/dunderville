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

        this.state = {
            isHovered: false
        };

        // This binding is necessary to make `this` work in the callback
        this._handleButtonMouseOver = this._handleButtonMouseOver.bind(this);

        this.components = {}
        this.components.links = props.t('header:navigation', { returnObjects: true }).map(() => createRef());
    }

    componentDidMount() {
        this._mountAnimation();
    }

    componentWillUnmount() {
        //this._unmountAnimation();
    }

    render() {
        const { t, router, inverted } = this.props;
        const { isHovered } = this.state;

        return (
            <nav className={styles.navigation}>
                <ol className={classNames(styles.list, inverted ? 'is-inverted' : '')} ref={this.el}>
                    {t('header:navigation', { returnObjects: true }).map((item, index) => {
                        return (
                            <li className={styles.item} key={index} ref={this.components.links[index]}>
                                <Button 
                                    className={
                                        classNames(styles.button, 
                                            router === item.button.href ? 'is-active' : '', 
                                            isHovered ? 'is-hovered' : '')
                                    } 
                                    href={item.button.href} 
                                    onMouseOver={this._handleButtonMouseOver} 
                                    onMouseLeave={this._handleButtonMouseLeave} 
                                    isHovered={isHovered}>
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

    _handleButtonMouseOver = () => {
        if (!this.props.inverted) {
            this.setState({ isHovered: true });
        }
    }

    _handleButtonMouseLeave = () => {
        if (!this.props.inverted) {
            this.setState({ isHovered: false });
        }
    }

    _mountAnimation() {
        const timelineOverlay = gsap.timeline();
        const links = this.components.links.map((item) => item.current);

        this.props.inverted ? 
            timelineOverlay.fromTo(links, { opacity: 0, autoAlpha: 0 }, { opacity: 1, autoAlpha: 1,  duration: 0.4, ease: "power3.inOut", stagger: 0.25 }, 1) :
            timelineOverlay.fromTo(links, { opacity: 0, autoAlpha: 0, y: 10 }, { opacity: 1, autoAlpha: 1, y: 0, duration: 0.4, ease: "power3.inOut", stagger: 0.25 }, 0);
    };

    _unmountAnimation() {
        console.log("unmount");
    };
}

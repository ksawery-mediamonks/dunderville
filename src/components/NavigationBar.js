import styles from './NavigationBar.module.scss';

import React, { Component } from 'react';
//import Link from 'next/link';
import Button from 'components/Button';
//import Router from 'next/router'


import { resizeManager } from '@superherocheesecake/next-resize-manager';

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false
        };

        this.detectWindowWidth = this._detectWindowWidth.bind(this);
    }
    
    componentDidMount() {
        this._setupEventListers();
        this._resize();
    }

    componentWillUnmount() {
        this._removeEventListers();
    }

    render() {
        const { t } = this.props;
        //const { router } = this.props;
        //const isDesktop = this.state.isDesktop;

        return (
            <nav className={styles.navigation}>
                <ol className={styles.list}>
                    {t('header:navigation', { returnObjects: true }).map((item) => {
                        return (
                            <li className={styles.item} key={item.button.copy} >
                                <Button href={item.button.href}>
                                    <span className={styles.link}>{item.button.item}</span>
                                    <span className={styles.link}>{item.button.copy}</span>
                                </Button>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        );
    }

    _openMenuOverlay() {
        console.log('open menu overlay');
    }

    _setupEventListers() {
        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);

        //Router.events.on("routeChangeComplete", this._detectRoute);
    }

    _removeEventListers() {
        resizeManager.removeEventListener('resize', this._resizeHandler);
        resizeManager.removeEventListener('resize:complete', this._resizeHandler);
    }
    
    _resize() {
        this._detectWindowWidth();
    }

    _resizeHandler = () => {
        this._resize();
    }

    _detectWindowWidth() {
        this.setState({ isDesktop: window.innerWidth > 1024 });
    }

    // _detectRoute = () => {
    //     console.log(router.pathname);
    // }

    _handleMenuClick = () => {
        //call a private function
        this._openMenuOverlay();
    };
}

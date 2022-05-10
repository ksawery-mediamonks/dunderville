import styles from './MenuOverlay.module.scss';

import React, { Component } from 'react';

import Navigation from 'components/Navigation';
import Banner from 'components/Banner';

import Header from 'components/Header';

import { Router } from 'next/router';

import { resizeManager } from '@superherocheesecake/next-resize-manager';

export default class MenuOverlay extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false,
          isHome: false
        };

        this.detectWindowWidth = this._detectWindowWidth.bind(this);
    }
    
    componentDidMount() {
        this._setupEventListers();
        this._resize();

        this._detectRoutePath();
    }

    componentWillUnmount() {
        this._removeEventListers();
    }

    render() {
        const { t, router } = this.props;
        // const { isHome, isDesktop } = this.state;

        return (
            <div className={styles.overlay}>
                <Header t={t} router={router.pathname}></Header>
                <Banner />
                <Navigation className={styles.navigation} t={t} />
            </div>
        );
    }


    _setupEventListers() {
        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);

        Router.events.on("routeChangeComplete", this._detectRoutePath);
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

    _detectRoutePath = () => {
        this.props.router === '/' ? this.setState({ isHome: true }) :
        this.setState({ isHome: false })
    }
}


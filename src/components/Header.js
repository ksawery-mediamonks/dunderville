import styles from './Header.module.scss';

import React, { Component } from 'react';

import Button from 'components/Button';
import ButtonMenu from 'components/ButtonMenu';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';

import { Router } from 'next/router';
import { isFunction } from 'utils/helpers';

import { resizeManager } from '@superherocheesecake/next-resize-manager';
import { isMediaQueryWide } from 'utils/DeviceUtil';

import classNames from 'classnames';

export default class Header extends Component {

    getClassNames() {
        const { className } = this.props;

        return classNames('header', styles[className], className)
    }

    constructor(props) {
        super(props);
        this.state = {
          isHome: false,
          isMediaQueryWide: isMediaQueryWide()
        };
    }
    
    componentDidMount() {
        this._setupEventListers();
        this._resize();
        this._setMediaQueryWide();

        this._detectRoutePath();
    }

    componentWillUnmount() {
        this._removeEventListers();
    }

    render() {
        const { t, router, overlayMenuVisible } = this.props;
        const { isHome, isMediaQueryWide } = this.state;
        //shownavigation = isNarrow ! false : router.path === '/' ? false : true

        return (
            <header className={classNames(styles.header, overlayMenuVisible ? 'is-open' : '')}>
                <div className={styles.container}>
                    {isHome ? (
                    <div className={styles.logo}>
                        <Logo 
                            className={styles['logo-icon']}
                            src={t('header:logo.src-narrow')} 
                            alt={t('header:logo.alt')} 
                        />
                    </div>
                        ) : (
                    <Button href="/" className={`${styles.ir} ${styles.logo}`}>
                        <Logo 
                            className={styles['logo-icon']} 
                            src={t('header:logo.src-narrow')} 
                            alt={t('header:logo.alt')} 
                        />
                    </Button>
                    )}
                    {isMediaQueryWide && (
                        <span className={styles.title}>{t('header:copy.main-wide')}</span>
                    )}
                    {!isMediaQueryWide && !overlayMenuVisible && (
                        <span className={styles.title}>{t('header:copy.main')}</span>
                    )}
                    {overlayMenuVisible && (
                        <span className={styles.title}>{t('header:copy.secondary')}</span>
                    )}
                    <ButtonMenu 
                        overlayMenuVisible={overlayMenuVisible} 
                        onButtonMenuClicked={this._handleButtonMenuClick}
                        t={t} 
                    />
                    {isHome && (
                        <span className={styles.title}>{t('header:copy.secondary')}</span>
                    )}
                    {!isHome && isMediaQueryWide && (
                        <Navigation t={t} router={router}/>
                    )}
                </div>
            </header>
        );
    }

    _setMediaQueryWide() {
        const boolean = isMediaQueryWide();

        if (this.state.isMediaQueryWide !== boolean) {
            this.setState({ isMediaQueryWide: boolean });
        }
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
        this._setMediaQueryWide();
    }

    _resizeHandler = () => {
        this._resize();
    }

    _detectRoutePath = () => {
        this.props.router === '/' ? this.setState({ isHome: true }) :
        this.setState({ isHome: false })
    }

    _handleButtonMenuClick = (overlayMenuVisible) => {
        const { onButtonMenuClicked } = this.props;

        if (onButtonMenuClicked && isFunction(onButtonMenuClicked)) {
            onButtonMenuClicked(overlayMenuVisible);
        }
    }
 }


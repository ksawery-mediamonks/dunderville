import styles from './Header.module.scss';

import React, { Component } from 'react';
import classNames from 'classnames';
import Button from 'components/Button';

import { Router } from 'next/router';

import { resizeManager } from '@superherocheesecake/next-resize-manager';

export default class Header extends Component {

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

        this._detectRoute();
    }

    componentWillUnmount() {
        this._removeEventListers();
    }

    render() {
        const { t } = this.props;
        const { router } = this.props;
        const isDesktop = this.state.isDesktop;
        const isHome = this.state.isHome;

        return (
            <header className={styles.header}>
                <div className={styles.header__container}>
                    {isHome ? (
                    <div className={styles.header__logo}>
                        <img className={styles['header__logo-icon']} src={t('header:logo.src-narrow')} alt={t('header:logo.alt')} />
                    </div>
                        ) : (
                    <Button href="/" className={`${styles.ir} ${styles.header__logo}`}>
                        <img className={styles['header__logo-icon']} src={t('header:logo.src-narrow')} alt={t('header:logo.alt')} />
                    </Button>
                    )}
                    {isDesktop ? (
                    <span className={styles.header__title}>{t('header:copy.main-wide')}</span>
                        ) : (
                    <span className={styles.header__title}>{t('header:copy.main')}</span>
                    )}
                    <Button className={`${styles.ir} ${styles['button-menu']}`} onClick={this._handleMenuClick}>
                        {t('header:menu.copy')}
                        <div className={styles['button-menu__block']}></div>
                        <div className={styles['button-menu__icon']}>
                            <img src='/assets/img/burger.svg' />
                        </div>
                    </Button>
                    {isHome ? (
                    <span className={styles.header__title}>{t('header:copy.secondary')}</span>
                        ) : (
                    <nav className={styles.navigation}>
                        <ol className={styles.list}>
                            {t('header:navigation', { returnObjects: true }).map((item) => {
                                return (
                                    <li className={styles.item} key={item.button.copy} >
                                        <Button href={item.button.href} className={classNames(router === item.button.href ? styles['active'] : null)}>
                                            <span className={styles.link}>{item.button.item}</span>
                                            <span className={styles.link}>{item.button.copy}</span>
                                        </Button>
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                    )}
                </div>
            </header>
        );
    }

    _openMenuOverlay() {
        console.log('open menu overlay');
    }

    _setupEventListers() {
        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);

        Router.events.on("routeChangeComplete", this._detectRoute);
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

    _detectRoute = () => {
        this.props.router === '/' ? this.setState({ isHome: true }) :
        this.setState({ isHome: false })
    }

    _handleMenuClick = () => {
        //call a private function
        this._openMenuOverlay();
    };
}


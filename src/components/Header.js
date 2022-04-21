import styles from './Header.module.scss';

import React, { Component } from 'react';
//import Link from 'next/link';
import Button from 'components/Button';
//import Router from 'next/router'


import { resizeManager } from '@superherocheesecake/next-resize-manager';

export default class Header extends Component {

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
        const { router } = this.props;
        const isDesktop = this.state.isDesktop;

        if ( router === '/') {
            return (
                <header className={styles.header}>
                <div className={styles.header__container}>
                    <div className={styles.header__logo}>
                        <img className={styles['header__logo-icon']} src={t('header:logo.src-narrow')} alt={t('header:logo.alt')} />
                    </div>
                    {isDesktop ? (
                    <span className={styles.header__title}>{t('header:copy.home-main-wide')}</span>
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
                    <span className={styles.header__title}>{t('header:copy.secondary')}</span>
                </div>
            </header>
            );
        }

        return (
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <Button href="/" className={`${styles.ir} ${styles.header__logo}`}>
                        <img className={styles['header__logo-icon']} src={t('header:logo.src-narrow')} alt={t('header:logo.alt')} />
                    </Button>
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
                    <nav className={styles.navigation}>
                        <ol className={styles.list}>
                            {t('header:navigation', { returnObjects: true }).map((item) => {
                                return (
                                    <li className={styles.item} key={item.button.copy} >
                                        { router === item.button.href ? (
                                        <Button href={item.button.href} className={styles['active']}>
                                            <span className={styles.link}>{item.button.item}</span>
                                            <span className={styles.link}>{item.button.copy}</span>
                                        </Button>
                                        ) : (
                                        <Button href={item.button.href}>
                                            <span className={styles.link}>{item.button.item}</span>
                                            <span className={styles.link}>{item.button.copy}</span>
                                        </Button>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
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

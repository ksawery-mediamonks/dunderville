import styles from './Navigation.module.scss';

import React, { Component } from 'react';
import Button from 'components/Button';
import classNames from 'classnames';

import { toRoman } from 'utils/NumberToRoman';

export default class Navigation extends Component {

    render() {
        const { t, overlayMenuVisible, router, inverted } = this.props;


        //state class - modifier

        return (
            <nav className={styles.navigation}>
                {/* <ul className={classNames(styles.list, inverted ? 'is-inverted' : '')} ref={this.el}> */}
                <ol className={classNames(styles.list, inverted ? 'is-inverted' : '')} ref={this.el}>
                {/* <ol className={styles.list}> */}
                    {t('header:navigation', { returnObjects: true }).map((item, index) => {
                        return (
                            <li className={styles.item} key={index} >
                                <Button className={classNames(router === item.button.href ? styles['active'] : null)} href={item.button.href} onClick={this._handleMenuClick}>
                                    <span className={styles.link}>{toRoman(index + 1)}.</span>
                                    <span className={styles.link}>{item.button.copy}</span>
                                </Button>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        );
    }


    _handleMenuClick() {
        //
        console.log('')
    }
}

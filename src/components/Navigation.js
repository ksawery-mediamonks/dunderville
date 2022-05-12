import styles from './Navigation.module.scss';

import React, { Component } from 'react';
import Button from 'components/Button';
import classNames from 'classnames';

import { toRoman } from 'utils/NumberToRoman';

export default class Navigation extends Component {

    render() {
        const { t, router, inverted } = this.props;

        //state class - modifier
        return (
            <nav className={styles.navigation}>
                <ol className={classNames(styles.list, inverted ? 'is-inverted' : '')} ref={this.el}>
                    {t('header:navigation', { returnObjects: true }).map((item, index) => {
                        return (
                            <li className={styles.item} key={index} >
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
}

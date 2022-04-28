import styles from './NavigationBar.module.scss';

import React, { Component } from 'react';
import Button from 'components/Button';
import classNames from 'classnames';

export default class NavigationBar extends Component {

    render() {
        const { t } = this.props;
        const { router } = this.props;

        return (
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
        );
    }
}

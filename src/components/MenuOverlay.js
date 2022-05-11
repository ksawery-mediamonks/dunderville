import styles from './MenuOverlay.module.scss';

import React, { Component } from 'react';

import Navigation from 'components/Navigation';
import Banner from 'components/Banner';

import classNames from 'classnames';


export default class MenuOverlay extends Component {
    render() {
        const { t, overlayMenuVisible } = this.props;
        

        return (
            <div className={styles.overlay}>
                <div className={styles.wrapper}>
                    <Banner />
                        <Navigation inverted t={t} overlayMenuVisible={overlayMenuVisible}/>
                </div>
            </div>
        );
    }
}


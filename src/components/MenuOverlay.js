import styles from './MenuOverlay.module.scss';

import React, { Component } from 'react';

import Navigation from 'components/Navigation';
import Banner from 'components/Banner';

export default class MenuOverlay extends Component {
    render() {
        const { t } = this.props;
        

        return (
            <div className={styles.overlay}>
                <div className={styles.wrapper}>
                    <Banner inverted />
                    <Navigation inverted t={t} />
                </div>
            </div>
        );
    }
}


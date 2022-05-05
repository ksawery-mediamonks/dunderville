import React, { Component } from 'react';

import styles from './SubHeading.module.scss';

export default class SubHeading extends Component {
    render() {
        return (
            <h2 className={styles.subheading}>
                {this.props.title}
            </h2>
        );
    }
}

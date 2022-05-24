import React, { Component } from 'react';

import styles from './SubHeading.module.scss';
import classNames from 'classnames';

export default class SubHeading extends Component {
    getClassNames() {
        const { className } = this.props;

        return classNames(styles.subheading, styles[className], className)
    }

    render() {
        return (
            <h2 className={this.getClassNames()}>
                {this.props.title}
            </h2>
        );
    }
}

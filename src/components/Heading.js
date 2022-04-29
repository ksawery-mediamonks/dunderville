import React, { Component } from 'react';

import styles from './Heading.module.scss';

export default class Heading extends Component {
    render() {
        return (
            <h1 className={styles.heading}>
                {this.props.title}
                <div className={styles.heading__focus}>
                    {this.props.focus}
                </div>
            </h1>
        );
    }
}

import React, { Component, createRef } from 'react';
import Link from 'next/link';

import styles from './Button.module.scss';
import classNames from 'classnames';

import { isFunction } from 'utils/helpers'


export default class Button extends Component {
    ui = {
        button: createRef()
    }

    getClassNames() {
        const { className } = this.props;

        return classNames('button', styles[className], className)
    }

    render() {

        const { href, target, children, ...otherProps } = this.props;

        if (href && target === '_blank') {
            return (
                <a ref={this.ui.button} className={this.getClassNames()} href={href} target={target} onClick={this._handleClick} {...otherProps}>
                    {children}
                </a>
            );
        }

        if (href && target !== '_blank') {
            return (
                <Link href={href}>
                    <a ref={this.ui.button} className={this.getClassNames()} onClick={this._handleClick}>
                        {children}
                    </a>
                </Link>
            );
        }

        return (
            <button ref={this.ui.button} className={this.getClassNames()} onClick={this._handleClick}>
                {children}
            </button>
        );
    }

    //only call a function
    _handleClick = (e) => {
        const { onClick } = this.props;
        if (isFunction(onClick)) {
            onClick(e);
        }
    };
}
import React, { Component, createRef } from 'react';

import styles from './Header.module.scss';

import Button from 'components/Button';
import { isFunction } from 'utils/helpers';

export default class ButtonMenu extends Component {
    constructor(props) {
        super(props);

        this.ui = {
            icon: createRef()
        };
    }

    render() {
        const { t } = this.props;
        const { overlayMenuVisible } = this.props;
        
        return (
            <Button className={`${styles.ir} ${styles['button-menu']}`} onClick={this._handleMenuClick}>
                {t('header:menu.copy')}
                <div className={styles['button-menu__block']}></div>
                <div className={styles['button-menu__icon']}>

                {overlayMenuVisible ? (
                    <img className={styles.close} ref={this.ui.icon} src='/assets/img/burger-close.svg' />
                        ) : (
                    <img className={styles.open} ref={this.ui.icon} src='/assets/img/burger.svg' />
                )}
                {/* {overlayMenuVisible && (
                    <img ref={this.ui.icon} src='/assets/img/burger-close.svg' />
                )}
                {!overlayMenuVisible && (
                    <img ref={this.ui.icon} src='/assets/img/burger.svg' />
                )} */}
                </div>
            </Button>
        );
    }

    _handleMenuClick = () => {
        const { onButtonMenuClicked, overlayMenuVisible } = this.props;
        console.log("inital:", overlayMenuVisible);
        console.log("toggled:", !overlayMenuVisible);

        if (onButtonMenuClicked && isFunction(onButtonMenuClicked)) {
            onButtonMenuClicked(!overlayMenuVisible);
        }
    }
}


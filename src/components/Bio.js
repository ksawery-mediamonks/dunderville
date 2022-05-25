import React, { Component, createRef } from 'react';
import { gsap } from "gsap";
import { isFunction } from 'utils/helpers';

import ButtonReverse from 'components/ButtonReverse';

import styles from './Bio.module.scss';

export default class Bio extends Component {

    ui = {
        image: createRef(),
        imageInverted: createRef(),
    };
    componentDidMount() {
        //this._setupEventListener();
        //console.log(this.props);
    }

    render() {
        const { item, t } = this.props;
        //const { isSectionInverted } = this.state;

        return (
            <div className={styles.bio} >
                <h2 className={styles.fullname}>{item.fullname}</h2>
                <h3 className={styles.role}>{item.role}</h3>
                <div className={styles.imageContainer}>
                    <img ref={this.ui.image} className={styles.image} src={item.img} alt={item.imgalt}></img>
                    <img ref={this.ui.imageInverted} className={styles.imageInverted} src={item.imgInverted} alt={item.imgalt}></img>
                </div>
                <ButtonReverse 
                    onButtonReverseClicked={this._handleButtonReverseClick}
                    t={t}
                />
                <p className={styles.description}>{item.description}</p>
            </div>
        )
    }

    _handleButtonReverseClick = (isInverted) => {
        const { onButtonReverseClicked } = this.props;

        if (onButtonReverseClicked && isFunction(onButtonReverseClicked)) {
            onButtonReverseClicked(isInverted);
        }
    }
}
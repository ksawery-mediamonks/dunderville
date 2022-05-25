import React, { Component, createRef, forwardedRef } from 'react';
import { gsap } from "gsap";

import styles from './SectionUs.module.scss';

import SubHeading from 'components/SubHeading';
import Bio from 'components/Bio';

export default class SectionUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isInverted: false
        };

        this.ui = {
            buttonText: createRef(),
            section: createRef(),
            buttonBackground: createRef(),
            buttonIcon: createRef(),
            bioImage: createRef(),
        };

        this.components = {}
        this.components.blocks = props.t('us:bio', { returnObjects: true }).map(() => createRef());
    }

    componentDidMount() {
        this._setupTl();

        //this._setupEventListener();
    }

    componentWillUnmount() {
        this._killTimelines();
    }

    render() {
        const { t } = this.props;
        const { isInverted } = this.state;

        return (
            <section className={styles.section} ref={this.ui.section}>
                <div className={styles.wrapper}>
                    <SubHeading title={t('us:title')} />
                    <div className={styles.container}>
                        {t('us:bio', { returnObjects: true }).map((item, index) => {
                            return (
                                <Bio 
                                    item={item} 
                                    index={index} 
                                    key={index} 
                                    isInverted={isInverted}
                                    onButtonReverseClicked={this._handleButtonReverseClick} 
                                 />
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }

    _setupTl() {
        this._tlSectionReverse = gsap.timeline({ paused: true });
        this._tlSectionReverse.fromTo(this.ui.section.current, { backgroundColor: "#e6e2dd" }, { backgroundColor: "#303030", duration: 0.2 }, 0);
        this._tlSectionReverse.fromTo(this.ui.section.current, { backgroundColor: "#e6e2dd" }, { backgroundColor: "#303030", duration: 0.1, onComplete: this._handleStateReverse});
    }

    _handleButtonReverseClick = (isInverted) => {
        this.setState({ isInverted: isInverted }, () => {
            this._tlSectionReverse.play();
        });
    }

    _handleStateReverse = () => {
        this.setState({ isInverted: this.state.isInverted }, () => {
            this._tlSectionReverse.reverse();
        });
    }

    _killTimelines() {
        if (this._tlSectionReverse) {
            this._tlSectionReverse.kill();
            this._tlSectionReverse = null;
        }
    }
}


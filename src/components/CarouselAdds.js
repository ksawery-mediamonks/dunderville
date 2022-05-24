import React, { Component, createRef } from 'react';
import Button from 'components/Button';

import { resizeManager } from '@superherocheesecake/next-resize-manager';

import styles from './CarouselAdds.module.scss';

export default class CarouselAdds extends Component {
    constructor(props) {
        super();
        // Get ui elements
        this.ui = {
            carouselContainer: createRef(),
            carousel: createRef(),
            slides: [],
            buttonSlide: []
        };

    }

    render() {
        // object decontstruction to get variables
        const { t } = this.props;

        return (
            <div className={styles.carousel}>
                <ul className={styles.content}>
                    {t('carousel:item', { returnObjects: true }).map((item, index) => {
                        return (
                            <li className={styles.block} key={index}>
                                <div className={styles.item}>
                                    <p className={styles.testimony}>{item.testimony}</p>
                                    <p className={styles.author}>{item.author}</p>
                                </div>
                                <div className={styles.container}>
                                    <img className={styles.logo} src={item.logo} alt={item.logoalt} />
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <ul className={styles.navigation}>
                        {t('carousel:item', { returnObjects: true }).map((item, index) => {
                            return (
                                <Button className={styles.navigationButton} data-client={item.title} key={index}>{index + 1}</Button>
                            );
                    })}
                </ul>
            </div>
        );
    }
}

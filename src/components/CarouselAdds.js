import styles from './CarouselAdds.module.scss';

import React, { Component } from 'react';
import Button from 'components/Button';

export default class CarouselAdds extends Component {

    render() {
        const { t } = this.props;

        return (
            <div className={styles.carousel}>
                <ul className={styles.carousel__content}>
                    {t('carousel:item', { returnObjects: true }).map((item) => {
                        return (
                            <li className={styles['carousel__content-block']} key={item.title}>
                                <div className={styles['carousel__content-item']}>
                                    <p className={styles['carousel__content-testimony']}>{item.testimony}</p>
                                    <p className={styles['carousel__content-author']}>{item.author}</p>
                                </div>
                                <div className={styles['carousel__content-logo-container']}>
                                    <img className={styles['carousel__content-logo']} src={item.logo} alt={item.logoalt} />
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <ul className={styles.carousel__navigation}>
                        {t('carousel:item', { returnObjects: true }).map((item) => {
                        return (
                            <Button className={styles['carousel__navigation-button']} data-client={item.title} key={item.key}>{item.key}</Button>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

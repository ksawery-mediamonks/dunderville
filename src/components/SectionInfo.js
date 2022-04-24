import React, { Component } from 'react';

import Button from 'components/Button';
import styles from './SectionInfo.module.scss';

export default class SectionInfo extends Component {

    render() {
        const { t } = this.props;

        return (
            <section className={styles['section']}>
                <div className={styles['section__title']}>{t('home:section-info.title')}</div>
                {t('home:section-info.block', { returnObjects: true }).map((item) => {
                    return (
                        <div className={styles['info-block']} key={item.title}>
                            <div className={styles['info-block__wrapper']}>
                                <img className={styles['info-block__img']} src={item.img} alt="text" width="100%" height="100%"></img>
                                <h2 className={styles['info-block__title']}>{item.title}</h2>
                                <Button className="info-block__button ir" href={item.href}>
                                    {item.title}
                                    <svg className={styles['info-block__button-icon']} viewBox="0 0 26 9">
                                        <path d="M0.211,3.435 L17.800,3.338 C17.800,2.038 17.795,1.288 17.749,0.133 C20.535,1.604 22.969,2.870 25.789,4.137 C23.030,5.495 20.615,6.731 17.749,8.142 C17.889,6.886 17.800,6.319 17.800,4.937 L0.211,4.746 L0.211,3.435 Z"></path>
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    );
                })}

                

            </section>
        );
    }
}


import React, { Component } from 'react';

import Button from 'components/Button';
import styles from './AboutSection.module.scss';


export default class AboutSection extends Component {

    render() {
        const { t } = this.props;

        return (
            <section className={styles['section']}>
                <span className={styles['section__title']}>{t('home:section.title')}</span>
                <h1 className={styles['section__heading']}>
                    <span className={styles['focus']}>{t('home:section.heading-part-1-focus')}</span>
                    <span className={styles['part']}>{t('home:section.heading-part-1')}</span>
                    <span className={styles['focus']}>{t('home:section.heading-part-2-focus')}</span>
                    <span className={styles['part']}>{t('home:section.heading-part-2')}</span>
                </h1>
                
                <Button className={styles['button-box-shadow']} href={t('home:section.button-href')}>
                    <div className={styles['button-box-shadow__wrapper']}>
                        {t('home:section.button-copy')}
                    </div>
                </Button>
                                {/* <Button className="button-box-shadow" href={t('home:section.button-href')}>
                    <div className="button-box-shadow__wrapper">
                        {t('home:section.button-copy')}
                    </div>
                </Button> */}
            </section>
        );
    }
}


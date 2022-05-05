import React, { Component } from 'react';

import Button from 'components/Button';
import styles from './SectionAbout.module.scss';

export default class SectionAbout extends Component {

    render() {
        const { t } = this.props;

        return (
            <section className={styles['section']}>
                <div className={styles['section__title']}>{t('home:section-about.title')}</div>
                <h1 className={styles['section__heading']}>
                    <span className={styles['focus']}>{t('home:section-about.heading-part-1-focus')}</span>
                    <span className={styles['part']}>{t('home:section-about.heading-part-1')}</span>
                    <span className={styles['focus']}>{t('home:section-about.heading-part-2-focus')}</span>
                    <span className={styles['part']}>{t('home:section-about.heading-part-2')}</span>
                </h1>
                
                <Button className={styles['button-box-shadow']} href={t('home:section-about.button-href')}>
                    <div className={styles['button-box-shadow__wrapper']}>
                        {t('home:section-about.button-copy')}
                    </div>
                </Button>
            </section>
        );
    }
}


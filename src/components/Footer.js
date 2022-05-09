import React, { Component } from 'react';
import styles from './Footer.module.scss';

import Button from 'components/Button';

export default class Footer extends Component {
    render() {
        const { t } = this.props;

        return (
            <footer className={styles.footer}>
                    <div className={styles.footer__block}>
                        <Button className={styles.footer__logo} href={t('footer:logo.href')}>
                            <img className={styles['footer__logo-img']} src={t('footer:logo.src')} alt={t('footer:logo.alt')} />
                        </Button>
                    </div>
                    <div className={styles.footer__block}>
                        <div className={styles['footer__block-item']}>
                            <span className={styles['footer__block-title']}>{t('footer:general.contact.title')}</span>
                            <div className={styles.footer__data}>
                                <Button className={styles['footer__block-link']} href={`mailto:${t('footer:general.contact.email')}`}>
                                    {t('footer:general.contact.email')}
                                </Button>
                                <span>M: {t('footer:general.contact.phonenumber')}</span>
                            </div>
                        </div>
                        <div className={styles['footer__block-item']}>
                            <span className={styles['footer__block-title']}>{t('footer:general.address.title')}</span>
                            <div className={styles.footer__data}>
                                <span>{t('footer:general.address.address')}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer__block}>
                        {t('footer:contact', { returnObjects: true }).map((item) => {
                            return (
                                <div className={styles['footer__block-item']} key={item.title}>
                                    <span className={styles['footer__block-title']}>{item.title}</span>
                                    <div className={styles.footer__data}>
                                        <Button className={styles['footer__block-link']} href={`mailto:${item.email}`}>
                                            {item.email}
                                        </Button>
                                        <span>M: {item.phonenumber}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.footer__block}>
                        <span className={styles['footer__block-title']}>{t('footer:web.title')}</span>
                        {t('footer:web.item', { returnObjects: true }).map((item) => {
                            return (
                                <div className={styles['footer__block-item']} key={item.title}>
                                    <Button className={styles['footer__block-link']} href={item.href} target="_blank">
                                        {item.title}
                                        <svg className={styles['footer__block-icon']} viewBox="0 0 17 18">
                                            <path d="M13.652,7.897 L13.498,16.313 L13.652,16.313 L13.652,17.845 L0.700,17.845 L0.700,16.313 L12.207,16.313 L12.129,7.897 C10.891,7.897 10.177,7.901 9.076,7.946 C10.478,5.280 11.684,2.952 12.890,0.254 C14.183,2.894 15.361,5.204 16.705,7.946 C15.509,7.811 14.969,7.897 13.652,7.897 Z"></path>
                                        </svg>
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.footer__statement}>
                        <span>{t('footer:statement')}</span>
                    </div>
            </footer>
        );
    }
}

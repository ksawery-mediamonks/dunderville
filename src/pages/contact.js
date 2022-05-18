// import Head from 'next/head';
import React, { Component, createRef } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';

import Heading from 'components/Heading';
import Marquee from 'components/Marquee';
// import Spritesheet from 'components/Spritesheet';

import styles from './contact.module.scss';


class Contact extends Component {
    el = createRef();

    render() {
        const { t } = this.props;

        return (
            <div ref={this.el} className={styles.contact}>
                <Heading title={t('contact:heading')} />
                <Marquee />
                {/* <Spritesheet /> */}
            </div>
        );
    }
}

export default withTranslation(Contact);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'footer'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['contact', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};
// import Head from 'next/head';
import React, { Component, createRef } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';

class Studio extends Component {
    el = createRef();

    render() {
        const { t } = this.props;

        return (
            <div ref={this.el}>
                <h1>{t('studio:heading')}</h1>
            </div>
        );
    }
}

export default withTranslation(Studio);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'footer'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['studio', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};
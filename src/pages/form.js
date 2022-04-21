import Head from 'next/head';
import React, { Component } from 'react';

import FormContact from 'components/FormContact';

import { withTranslation, getTranslation } from 'utils/translations/i18n';

class Form extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className="page page-form">
                <Head>
                    <title>{t('form:meta__title')}</title>
                </Head>

                <h1>{t('form:heading')}</h1>

                <FormContact t={t} />
            </div>
        );
    }
}

export default withTranslation(Form);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'footer'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['form', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};

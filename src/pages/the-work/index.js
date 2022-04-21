// import Head from 'next/head';
import React, { Component, createRef } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';
import Button from 'components/Button';

class Work extends Component {
    el = createRef();

    render() {
        const { t } = this.props;

        return (
            <div ref={this.el}>
                <h1>{t('work:heading')}</h1>
                <Button href="/the-work/case">Go to case</Button>
            </div>
        );
    }
}

export default withTranslation(Work);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'footer'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['work', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};
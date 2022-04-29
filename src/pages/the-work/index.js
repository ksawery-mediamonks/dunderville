// import Head from 'next/head';
import React, { Component, createRef } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';

import Button from 'components/Button';
import Heading from 'components/Heading';

class Work extends Component {
    el = createRef();

    render() {
        const { t } = this.props;

        return (
            <div ref={this.el}>
                <Heading title={t('work:heading')}/>
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
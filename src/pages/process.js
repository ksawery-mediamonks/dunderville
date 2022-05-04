// import Head from 'next/head';
import React, { Component, createRef } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';

import Heading from 'components/Heading';


class Process extends Component {
    el = createRef();

    render() {
        const { t } = this.props;

        return (
            <div ref={this.el}>
                <Heading title={t('process:heading')}/>
            </div>
        );
    }
}

export default withTranslation(Process);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'footer'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['process', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};
import React, { Component, createRef } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';

export async function getStaticPaths() {
    return {
        paths: [
            // String variant:
            '/the-work/case',
            // Object variant:
            { params: { case: 'case' } }
        ],
        fallback: true
    };
}

class Case extends Component {
    el = createRef();

    render() {
        const { t } = this.props;

        return (
            <div ref={this.el}>
                <h1>{t('work:heading')} Case</h1>
            </div>
        );
    }
}

export default withTranslation(Case);

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

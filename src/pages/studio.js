// import Head from 'next/head';
import React, { Component, createRef } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';

import Heading from 'components/Heading';
import SectionInfo from 'components/SectionInfo';
import CarouselAdds from 'components/CarouselAdds';

import router from 'next/router';

class Studio extends Component {
    el = createRef();

    render() {
        const { t } = this.props;

        return (
            <div ref={this.el}>
                <Heading 
                    title={t('studio:heading')}
                    focus={t('studio:focus')}
                />
                <CarouselAdds t={t}/>
                <SectionInfo router={router} t={t} />
            </div>
        );
    }
}

export default withTranslation(Studio);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'footer', 'home', 'carousel'];
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
import Head from 'next/head';
import React, { Component, createRef } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';
//import styles from './index.module.scss';

//import Button from 'components/Button';
import Banner from 'components/Banner';
import VideoPlayer from 'components/VideoPlayer';

import SectionAbout from 'components/SectionAbout';
import SectionShowcase from 'components/SectionShowcase';
import SectionInfo from 'components/SectionInfo';

class Home extends Component {
    el = createRef();

    _mousePosition = {
        x: 0,
        y: 0
    };

    componentDidMount() {
        this._setupEventListener();
    }

    componentWillUnmount() {
        this._removeEventListener();
    }

    render() {
        const { t } = this.props;

        return (
            <div ref={this.el}>
                <Head>
                    <title>{t('home:meta__title')}</title>
                </Head>

                <Banner />
                <VideoPlayer />
                <SectionAbout t={t} />
                <SectionShowcase t={t} />
                <SectionInfo t={t} />

                {/* <h1>{t('home:heading')}</h1> */}


                {/* <Button className={styles.cta} onClick={this._handleCtaClick}>
                    {t('home:cta')}
                </Button>
                <Button href="www.google.com" target="_blank">
                    {t('home:external-link')}
                </Button>
                <Button href="/form">
                    {t('home:internal-link')}
                </Button> */}
            </div>
        );
    }

    _removeEventListener() {
        window.removeEventListener('click', this._handleWindowClick);
    }

    _setupEventListener() {
        window.addEventListener('click', this._handleWindowClick);
    }

    _updateBackgroundColor() {
        this.el.current.style.backgroundColor = '#FF00FF';
    }

    _updateMousePosition(e) {
        this._mousePosition = {
            x: e.clientX,
            y: e.clientY,
        };

        console.log(this._mousePosition);
        console.log(e);
    }

    _handleCtaClick = () => {
        //call a private function
        this._updateBackgroundColor();
    };

    _handleWindowClick = (e) => {
        //call a private function
        this._updateMousePosition(e);
    };


}

export default withTranslation(Home);

// fallback to vars assigned for static export
export const getStaticProps = ({ locale = process.env.LOCALE, locales = process.env.LOCALES }) => {
    const shared = ['header', 'footer'];
    const translation = getTranslation({
        locale,
        locales,
        files: ['home', ...shared]
    });

    return {
        props: {
            translation
        }
    };
};
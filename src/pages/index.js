import Head from 'next/head';
import React, { Component, createRef } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';
//import styles from './index.module.scss';

//import Button from 'components/Button';
import Banner from 'components/Banner';
import NavigationBar from 'components/NavigationBar';
import VideoPlayer from 'components/VideoPlayer';

import SectionAbout from 'components/SectionAbout';
import SectionShowcase from 'components/SectionShowcase';
import SectionInfo from 'components/SectionInfo';

import { resizeManager } from '@superherocheesecake/next-resize-manager';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isDesktop: false
        };

        this.detectWindowWidth = this._detectWindowWidth.bind(this);
    }

    el = createRef();

    _mousePosition = {
        x: 0,
        y: 0
    };

    componentDidMount() {
        this._setupEventListener();
        this._resize();
    }

    componentWillUnmount() {
        this._removeEventListener();
    }

    render() {
        const { t } = this.props;
        const isDesktop = this.state.isDesktop;

        return (
            <div ref={this.el}>
                <Head>
                    <title>{t('home:meta__title')}</title>
                </Head>

                <Banner />
                {isDesktop && 
                    <NavigationBar t={t}  />
                }
                {/* {isDesktop ? (
                <NavigationBar t={t}  />
                        ) : (
                <span>not wide</span>
                )} */}
                <VideoPlayer />
                <SectionAbout t={t} />
                <SectionShowcase t={t} />
                <SectionInfo t={t} />

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

    _setupEventListener() {
        window.addEventListener('click', this._handleWindowClick);

        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);
        //console.log(window.innerWidth)
    }

    _removeEventListener() {
        window.removeEventListener('click', this._handleWindowClick);

        resizeManager.removeEventListener('resize', this._resizeHandler);
        resizeManager.removeEventListener('resize:complete', this._resizeHandler);
    }

    _resize() {
        this._detectWindowWidth();
    }

    _resizeHandler = () => {
        this._resize();
    }

    _detectWindowWidth() {
        this.setState({ isDesktop: window.innerWidth > 1024 });
        console.log(window.innerWidth)
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
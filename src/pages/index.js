import Head from 'next/head';
import React, { Component, createRef } from 'react';
import { withTranslation, getTranslation } from 'utils/translations/i18n';
//import styles from './index.module.scss';

//import Button from 'components/Button';
import Banner from 'components/Banner';
import Navigation from 'components/Navigation';
import VideoPlayer from 'components/VideoPlayer';

import SectionAbout from 'components/SectionAbout';
import SectionShowcase from 'components/SectionShowcase';
import SectionInfo from 'components/SectionInfo';
// import SpriteSheet from 'components/SpriteSheet';

import { resizeManager } from '@superherocheesecake/next-resize-manager';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWide: false
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
        const isWide = this.state.isWide;

        return (
            <div ref={this.el}>
                <Head>
                    <title>{t('home:meta__title')}</title>
                </Head>

                {/* <SpriteSheet /> */}

                <Banner isWide={isWide}/>
                {isWide && 
                    <Navigation t={t}  />
                }
                <VideoPlayer />
                <SectionAbout t={t} />
                <SectionShowcase t={t} />
                <SectionInfo t={t} />
            </div>
        );
    }

    _setupEventListener() {
        window.addEventListener('click', this._handleWindowClick);

        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);
    }

    _removeEventListener() {
        window.removeEventListener('click', this._handleWindowClick);

        resizeManager.removeEventListener('resize', this._resizeHandler);
        resizeManager.removeEventListener('resize:complete', this._resizeHandler);
    }

    _resize() {
        this._detectWindowWidth();
    }

    _detectWindowWidth() {
        this.setState({ isWide: window.innerWidth > 1024 });
    }

    _updateBackgroundColor() {
        this.el.current.style.backgroundColor = '#FF00FF';
    }

    _updateMousePosition(e) {
        this._mousePosition = {
            x: e.clientX,
            y: e.clientY,
        };

        // console.log(this._mousePosition);
        // console.log(e);
    }

    _resizeHandler = () => {
        this._resize();
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
    const shared = ['header', 'footer', 'home'];
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
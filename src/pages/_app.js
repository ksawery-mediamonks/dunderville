import 'styles/main.scss';

import { withTranslationApp } from 'utils/translations/i18n';
import WatchForHover from 'utils/WatchForHover';
// import Analytics from 'components/analytics/Analytics';
import { resizeManager } from '@superherocheesecake/next-resize-manager';
import { isMediaQueryWide } from 'utils/DeviceUtil';

import Transition from '@superherocheesecake/next-transition';

import React from 'react';
import Head from 'next/head';

import { Router } from 'next/router';

// import SafariCacheFix from 'components/performance/SafariCacheFix';
// import { report } from 'components/performance/WebVitals';

// import CookieNotification from 'components/CookieNotification';
// import GoogleGlobalSiteTag from 'components/analytics/GoogleGlobalSiteTag';

import Header from 'components/Header';
import Footer from 'components/Footer';
import MenuOverlay from 'components/MenuOverlay';
import Preloader from 'components/Preloader';

// export function reportWebVitals(props) {
//     report(props);
// }

class Application extends React.Component {
    state = {
        overlayMenuVisible: false,
        isNarrow: null,
        isMediaQueryWide: isMediaQueryWide() || null,
        isPreloaderCompleted: false
    }

    componentDidMount() {
        this._setupEventListers();
        this._resize();
        this._setMediaQueryWide();
        
        new WatchForHover();
    }

    componentWillUnmount() {
        this._removeEventListers();
    }

    render() {
        const { Component, t, pageProps, router } = this.props;
        const { overlayMenuVisible, isPreloaderCompleted } = this.state;

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <meta name="description" content="Dunderville test website"></meta>
                    <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" sizes="16x16 32x32 64x64" href="/assets/favicon/favicon.ico" />
                    <link rel="icon" type="image/png" sizes="196x196" href="/assets/favicon/favicon-192.png" />
                    <link rel="icon" type="image/png" sizes="160x160" href="/assets/favicon/favicon-160.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon/favicon-96.png" />
                    <link rel="icon" type="image/png" sizes="64x64" href="/assets/favicon/favicon-64.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16.png" />
                    <link rel="apple-touch-icon" href="/assets/favicon/favicon-57.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/favicon-114.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/favicon-72.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/favicon-144.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicon/favicon-60.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/favicon-120.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/favicon-76.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/favicon-152.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/favicon-180.png" />
                    <meta name="msapplication-TileColor" content="#FFFFFF" />
                    <meta name="msapplication-TileImage" content="/assets/favicon/favicon-144.png" />
                    <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
                </Head>

                {/* <SafariCacheFix /> */}
                
                { isPreloaderCompleted &&
                    <> 
                        <Header 
                            overlayMenuVisible={overlayMenuVisible} 
                            onButtonMenuClicked={this._handleButtonMenuClick} 
                            t={t} 
                            router={router.pathname}>
                        </Header>
                    
                        <Transition fragment={router.pathname}>
                            <Component {...pageProps} />
                        </Transition>
                        
                        <Footer t={t} router={router.pathname}></Footer>
                    </>
                }

                { !isPreloaderCompleted && 
                    <Preloader 
                        isPreloaderCompleted={isPreloaderCompleted}
                        onPreloaderCompleted={this._handlePreloaderCompleted} 
                    />
                }

                {overlayMenuVisible &&
                    <MenuOverlay t={t} router={router.pathname} />
                }

                {/* <Analytics>
                    <GoogleGlobalSiteTag />
                    <CookieNotification t={t} />
                </Analytics> */}
            </>
        );
    }

    _setMediaQueryWide() {
        const boolean = isMediaQueryWide();

        if (this.state.isMediaQueryWide !== boolean) {
            this.setState({ isMediaQueryWide: boolean });
        }
    }

    _setupEventListers() {
        resizeManager.addEventListener('resize', this._resizeHandler);
        resizeManager.addEventListener('resize:complete', this._resizeHandler);

        Router.events.on("routeChangeStart", this._handleRouteChange);
    }

    _removeEventListers() {
        resizeManager.removeEventListener('resize', this._resizeHandler);
        resizeManager.removeEventListener('resize:complete', this._resizeHandler);

        Router.events.off("routeChangeStart", this._handleRouteChange);
    }

    _resize() {
        this._setMediaQueryWide();
        this.setState({ overlayMenuVisible: false });
    }

    _resizeHandler = () => {
        this._resize();
    }

    _handleRouteChange = () => {
        setTimeout(() => {
            this.setState({overlayMenuVisible: false});
          }, "800")
    }

    _handleButtonMenuClick = (overlayMenuVisible) => {
        this.setState({ overlayMenuVisible: overlayMenuVisible });
        // this.setState({ overlayMenuVisible: overlayMenuVisible }, () => {
        //     //console.log(overlayMenuVisible);
        // })
    }

    _handlePreloaderCompleted = () => {
        this.setState({isPreloaderCompleted: true});
    }
}

export default withTranslationApp(Application);

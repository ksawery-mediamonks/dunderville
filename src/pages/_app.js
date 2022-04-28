import 'styles/main.scss';

import { withTranslationApp } from 'utils/translations/i18n';
// import Analytics from 'components/analytics/Analytics';

import Transition from '@superherocheesecake/next-transition';

import React from 'react';
import Head from 'next/head';

// import SafariCacheFix from 'components/performance/SafariCacheFix';
// import { report } from 'components/performance/WebVitals';

// import CookieNotification from 'components/CookieNotification';
// import GoogleGlobalSiteTag from 'components/analytics/GoogleGlobalSiteTag';

import Header from 'components/Header';
import Footer from 'components/Footer';

// export function reportWebVitals(props) {
//     report(props);
// }

class Application extends React.Component {
    render() {
        const { Component, t, pageProps, router } = this.props;

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                    <meta name="description" content="Dunderville test website"></meta>
                    {/* <link rel="icon" type="image/png" href="/assets/favicon/favicon-192.png"></link> */}
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

                <Header t={t} router={router.pathname}></Header>

                <Transition fragment={router.pathname}>
                    <Component {...pageProps} />
                </Transition>

                <Footer t={t}></Footer>

                {/* <Analytics>
                    <GoogleGlobalSiteTag />
                    <CookieNotification t={t} />
                </Analytics> */}
            </>
        );
    }
}

export default withTranslationApp(Application);
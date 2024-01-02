import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '../../globalStyles/global.css';
import '../../globalStyles/theme.css';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { Theme, useGlobalState } from '../../context';
import { SplashScreen } from '../SplashScreen';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { CookieBar, EnsureActivatedTrackingCookie } from '../CookieBar';
import * as classes from './style.module.css';

interface LayoutProps {
    children: React.ReactElement;
    useSplashScreenAnimation: boolean;
    useCookieBar: boolean;
}

export function Layout(props: LayoutProps): React.ReactElement {
    const location = useLocation();
    const { globalState, toggleTheme } = useGlobalState();
    const [isInternalNavigation, setIsInternalNavigation] = useState<boolean>(false);

    const showSplashScreen = !isInternalNavigation && props.useSplashScreenAnimation && !globalState.splashScreenDone;

    useLayoutEffect(() => {
        const referrer = location.state && (location.state as { referrer: string | null }).referrer !== null;
        setIsInternalNavigation(!!referrer);
    }, []);

    const splashScreenView = (
        <>
            <Helmet bodyAttributes={{ 'data-theme': Theme.Light }} />
            <SplashScreen />
        </>
    );


    const layoutView = (
        <>
            <Helmet
                bodyAttributes={{
                    'data-theme': globalState.theme,
                }}
            />
            <div className={classes.Layout}>
                <Header theme={globalState.theme} toggleTheme={toggleTheme} />
                <main>{props.children}</main>
                <Footer />
                {props.useCookieBar ? <CookieBar /> : <EnsureActivatedTrackingCookie />}
            </div>
        </>
    );

    return showSplashScreen ? splashScreenView : layoutView;
}
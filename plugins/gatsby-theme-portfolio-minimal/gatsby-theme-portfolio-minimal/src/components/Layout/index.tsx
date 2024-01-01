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
    const { globalState } = useGlobalState();
    const [isInternalNavigation, setIsInternalNavigation] = useState<boolean>(false);

    const showSplashScreen = !isInternalNavigation && props.useSplashScreenAnimation && !globalState.splashScreenDone;
    const darkModeEnabled = globalState.theme === Theme.Dark;

    
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
    

    // Add this function before your Layout component
    const initializeTheme = () => {
        const savedTheme = window.localStorage.getItem('theme');
        const isThemeManuallySet = window.localStorage.getItem('isThemeManuallySet');

        if (isThemeManuallySet === 'true' && savedTheme) {
            return savedTheme === 'Dark' ? Theme.Dark : Theme.Light;
        } else {
            return globalState.theme;
        }
    };

    // Add this line at the beginning of your Layout component
    const [theme, setTheme] = useState(() => initializeTheme());

    // Update body attribute when theme changes
    useEffect(() => {
        if (typeof document !== 'undefined') {
            const body = document.body;
            body.setAttribute('data-theme', theme);

            // Function to remove transition classes
            const removeTransitionClasses = () => {
                body.classList.remove('transition');
                body.classList.remove('transition-bg');
            };

            // Remove transition classes after the transition has completed
            body.addEventListener('transitionend', removeTransitionClasses);

            // Clean up the event listener when the component is unmounted
            return () => {
                body.removeEventListener('transitionend', removeTransitionClasses);
            };
        }
    }, [theme]);

    // Changing theme
    const toggleTheme = () => {
        const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
        setTheme(newTheme);
        document.body.classList.add('transition');
        document.body.classList.add('transition-bg');
        window.localStorage.setItem('theme', newTheme);
        window.localStorage.setItem('isThemeManuallySet', 'true');
    };


    const layoutView = (
        <>
            <Helmet
                bodyAttributes={{
                    'data-theme': theme,
                }}
            />
            <div className={classes.Layout}>
                <Header theme={theme} toggleTheme={toggleTheme} />
                <main>{props.children}</main>
                <Footer />
                {props.useCookieBar ? <CookieBar /> : <EnsureActivatedTrackingCookie />}
            </div>
        </>
    );

    return showSplashScreen ? splashScreenView : layoutView;
}

import React from 'react';
import { GlobalStateProvider, Theme } from '../../context';
import { useSiteConfiguration } from '../../hooks/useSiteConfiguration';
import { Layout } from '../Layout';

interface PageProps {
    children: React.ReactElement;
    useSplashScreenAnimation?: boolean;
    showNavigation?: boolean;
    showFooter?: boolean;
}

export function Page(props: PageProps): React.ReactElement {
    const siteConfiguration = useSiteConfiguration();
    const showNavigation = props.showNavigation ?? true;
    const showFooter = props.showFooter ?? true;
    return (
        <GlobalStateProvider
            defaultTheme={siteConfiguration.featureToggles.useDarkModeAsDefault ? Theme.Dark : Theme.Light}
            useDarkModeBasedOnUsersPreference={siteConfiguration.featureToggles.useDarkModeBasedOnUsersPreference}
            useSplashScreenAnimation={props.useSplashScreenAnimation || false}
        >
            <Layout
                useSplashScreenAnimation={props.useSplashScreenAnimation || false}
                useCookieBar={siteConfiguration.featureToggles.useCookieBar}
                showNavigation={showNavigation}
                showFooter={showFooter}
            >
                {props.children}
            </Layout>
        </GlobalStateProvider>
    );
}

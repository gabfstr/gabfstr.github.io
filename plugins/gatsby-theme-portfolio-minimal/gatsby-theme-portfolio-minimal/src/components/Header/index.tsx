import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Logo } from '../Logo';
import { Link } from '../Link';
import { Icon } from '../Icon';
import { Animation } from '../Animation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useSiteConfiguration } from '../../hooks/useSiteConfiguration';
import * as classes from './style.module.css';

export function Header({ theme, toggleTheme }): React.ReactElement {
    const [open, setOpen] = React.useState<boolean>(false);
    const siteConfiguration = useSiteConfiguration();
    const isDesktopBreakpoint = useMediaQuery('(min-width: 992px)');


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

    // Add scrolling state
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        if (typeof document !== 'undefined' && typeof window !== 'undefined') {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPosition = Math.round((window.scrollY / totalHeight) * 100);
            setScrollPosition(scrollPosition);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const navigationItems = (
        <>
            {siteConfiguration.navigation.header.map((linkObject, key) => {
                return (
                    <Link
                        key={key}
                        to={linkObject.url}
                        className={classes.NavLink}
                        onClick={!isDesktopBreakpoint ? () => setOpen(!open) : undefined}
                    >
                        {linkObject.label}
                    </Link>
                );
            })}
            
            {siteConfiguration.navigation.ctaButton?.url && siteConfiguration.navigation.ctaButton?.label ? (
                <Link
                    to={siteConfiguration.navigation.ctaButton.url}
                    target={siteConfiguration.navigation.ctaButton.openNewTab ? '_blank' : undefined}
                    className={classes.CtaButton}
                    onClick={!isDesktopBreakpoint ? () => setOpen(!open) : undefined}
                >
                    {siteConfiguration.navigation.ctaButton.label}
                </Link>
            ) : null}

            {/* Add theme toggle button */}
            <button onClick={toggleTheme} style={{background: 'none', border: 'none', cursor: 'pointer'}}>                
                    <Icon name="darkmode" color="var(--primary-color)" />
            </button>
        </>
    );

    const sideNavigationBar = (
        <>
            <div className={classes.Burger} onClick={() => setOpen(!open)}>
                <div style={open ? { transform: 'rotate(45deg)' } : undefined} />
                <div style={open ? { transform: 'translateX(20px)', opacity: 0 } : undefined} />
                <div style={open ? { transform: 'rotate(-45deg)' } : undefined} />
            </div>
            <div
                className={classes.SideBarWrapper}
                style={open ? { transform: 'translateX(0)', visibility: 'visible' } : undefined}
                aria-hidden={!open}
                tabIndex={open ? 1 : -1}
            >
                <nav className={classes.SideNavigationBar}>{navigationItems}</nav>
            </div>
            <div className={classes.SideBarBackdrop} style={open ? { display: 'block' } : undefined} />
        </>
    );

    const topNavigationBar = <nav className={classes.TopNavigationBar}>{navigationItems}</nav>;

    return (
        <header className={classes.Header}>
            <div className={classes.progressBar} style={{ width: `${scrollPosition}%` }} />
            {/* Make background blurry when sidebar is opened */}
            <Helmet bodyAttributes={{ class: open ? classes.Blurred : undefined }} />
            <Animation className={classes.ContentWrapper} type="fadeDown">
                <Link to="/" aria-label="home">
                    <Icon name="home" color="var(--primary-color)" />
                </Link>
                {isDesktopBreakpoint ? topNavigationBar : sideNavigationBar}
            </Animation>
        </header>
    );
}

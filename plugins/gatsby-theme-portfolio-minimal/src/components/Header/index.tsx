import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Logo } from '../Logo';
import { Link } from '../Link';
import { Icon } from '../Icon';
import { Animation } from '../Animation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useSiteConfiguration } from '../../hooks/useSiteConfiguration';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import * as classes from './style.module.css';

export function Header({ theme, toggleTheme }): React.ReactElement {
    const [open, setOpen] = useState<boolean>(false);
    const siteConfiguration = useSiteConfiguration();
    const scrollPosition = useScrollPosition();
    const isDesktopBreakpoint = useMediaQuery('(min-width: 992px)');

    

    // Close sidebar when clicking outside of it
    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (!open) {
                return;
            }

            if (event.target.closest(`.${classes.Blurred}`) && !event.target.closest(`.${classes.Burger}`)) {
                if (!event.target.closest(`.${classes.SideNavigationBar}`)) {
                    setOpen(false);
                }
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [open]);


    const handleLinkClick = () => {
        if (!isDesktopBreakpoint) {   
            setOpen(!open);
        }
    };

    const handleThemeToggleClick = (event) => {
        event.stopPropagation();
        toggleTheme();
    };

    const homeLogo = (
        <Link to="/" aria-label="home" className={classes.NavLink}>
            <Icon name="home" color="var(--primary-color)" />
        </Link>
    );

    const navigationItems = (
        <>
            {siteConfiguration.navigation.header.map((linkObject, key) => (
                <Link
                    key={key}
                    to={linkObject.url}
                    className={classes.NavLink}
                >
                    <span>{linkObject.label}</span>
                </Link>
            ))}
            
            {siteConfiguration.navigation.ctaButton?.url && siteConfiguration.navigation.ctaButton?.label ? (
                <Link
                    to={siteConfiguration.navigation.ctaButton.url}
                    target={siteConfiguration.navigation.ctaButton.openNewTab ? '_blank' : undefined}
                    className={classes.CtaButton}
                >
                    <span>{siteConfiguration.navigation.ctaButton.label}</span>
                </Link>
            ) : null}
    
            <button onClick={handleThemeToggleClick} style={{background: 'none', border: 'none', cursor: 'pointer'}}>                
                <Icon name="darkmode" color="var(--primary-color)" />
            </button>
        </>
    );

    const sideNavigationBarItems = (
        <>
            {homeLogo}
            {navigationItems}
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
                <nav className={classes.SideNavigationBar} onClick={handleLinkClick} >{sideNavigationBarItems}</nav>
            </div>
            <div className={classes.SideBarBackdrop} style={open ? { display: 'block' } : undefined} onClick={() => setOpen(false)} />
        </>
    );
    
    const topNavigationBar = <nav className={classes.TopNavigationBar}>{navigationItems}</nav>;
    
    return (
        <header className={classes.Header}>
            <div className={classes.progressBar} style={{ width: `${scrollPosition}%` }} />
            <Helmet bodyAttributes={{ class: open ? classes.Blurred : undefined }} />
            <Animation className={classes.ContentWrapper} type="fadeDown">
                {homeLogo}
                {isDesktopBreakpoint ? topNavigationBar : sideNavigationBar}
            </Animation>
        </header>
    );
}
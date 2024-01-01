import React from 'react';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';

import { isExternalURL } from '../../utils/isExternalURL';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Link({ to, children, ref, ...rest }: GatsbyLinkProps<undefined>): React.ReactElement {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const target = e.currentTarget;
        setTimeout(() => target.blur(), 300);
    };

    if (!isExternalURL(to) && rest.target !== '_blank') {
        return (
            <GatsbyLink to={to} {...rest} onClick={handleClick}>
                {children}
            </GatsbyLink>
        );
    } else {
        return (
            <a {...rest} href={to} rel="noopener noreferrer" onClick={handleClick}>
                {children}
            </a>
        );
    }
}

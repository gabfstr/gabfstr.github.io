import React from 'react';

interface IconHomeProps {
    color?: string;
}

export function IconHome(props: IconHomeProps): React.ReactElement {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            fill={props.color || 'var(--primary-color)'}
            x="0px"
            y="0px"
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
        >
            <path d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z"/>
        </svg>
    );
}
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z" fill="#000000"/>
</svg>
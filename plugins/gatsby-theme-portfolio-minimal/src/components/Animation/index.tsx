import React, { useState } from 'react';
import { useCastedRef } from '../../hooks/useCastedRef';
import { useOnScreen } from '../../hooks/useOnScreen';
import './style.css';

type AnimationTiming = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
type AnimationFillMode = 'forwards' | 'backwards' | 'both' | 'none';
type AnimationType =
    | 'fadeIn'
    | 'fadeOut'
    | 'fadeInAndOut'
    | 'fadeUp'
    | 'fadeDown'
    | 'fadeLeft'
    | 'scaleIn'
    | 'reduceHeight'
    | 'waving-hand';

interface AnimationProps {
    children?: React.ReactNode;
    type?: AnimationType;
    timing?: AnimationTiming;
    fillMode?: AnimationFillMode;
    delay?: number;
    duration?: number;
    iterationCount?: number;
    className?: string;
    style?: React.CSSProperties;
    onAnimationEnd?: () => void;
    restartOnClick?: boolean; // New prop
    countOnClick?: number; // New prop
}

export function Animation(props: AnimationProps): React.ReactElement {
    const ref = useCastedRef<HTMLDivElement>();
    const onScreen = useOnScreen<HTMLDivElement>(ref);

    // Add a key state variable
    const [key, setKey] = useState(0);

    // Set defaults
    const type = props.type ?? 'fadeIn';
    const timing = props.timing ?? 'ease-out';
    const duration = props.duration ?? 200;
    const delay = props.delay ?? 0;
    const [count, setCount] = useState(props.iterationCount ?? 1);
    const fillMode = props.fillMode ?? 'backwards';

    // Set default iteractionCount and restartOnClick values
    const countOnClick = props.countOnClick ?? 1;

    // Handle the click event
    const handleClick = () => {
        if (props.restartOnClick) {
            setKey(prevKey => prevKey + 1); // increment the key to force a re-render
            setCount(countOnClick); // set currentCount to countOnClick
        }
    };


    return (
        <div
            key={key} // add the key prop
            ref={ref}
            className={props.className}
            onClick={handleClick}
            onAnimationEnd={props.onAnimationEnd}
            style={
                onScreen
                    ? {
                          ...props.style,
                          animationName: `${type}`,
                          animationTimingFunction: `${timing}`,
                          animationDuration: `${duration}ms`,
                          animationDelay: `${delay}ms`,
                          animationIterationCount: `${count}`,
                          animationFillMode: `${fillMode}`,
                      }
                    : { ...props.style, opacity: 0 }
            }
        >
            {props.children}
        </div>
    );
}
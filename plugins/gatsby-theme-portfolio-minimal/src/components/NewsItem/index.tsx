import React from 'react';
import { Animation } from '../Animation';
import * as classes from './style.module.css';

export interface NewsItem {
    date: string;
    color: string;
    content: string;
}

interface NewsItemProps {
    data: NewsItem;
    index: number;
}

export function NewsItem(props: NewsItemProps): React.ReactElement {
    return (
        <Animation
            type="fadeUp"
        >
            <div className={classes.row}>
                <div className={`${classes.col} ${classes.colDate}`}>
                    <span className={classes.label} style={{backgroundColor: props.data.color}}>
                        {props.data.date}
                    </span>
                </div>
                <div className={`${classes.col} ${classes.colContent}`}>
                    <p dangerouslySetInnerHTML={{ __html: props.data.content }}></p>
                </div>
            </div>
        </Animation>
    );
}
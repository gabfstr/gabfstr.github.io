import React from 'react';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { NewsItem } from '../../components/NewsItem';
import { useLocalDataSource } from './data';
import { PageSection } from '../../types';
import * as classes from './style.module.css'; // import your CSS module

export function NewsSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const newsItems = response.allNewsJson.nodes[0].news;

    if (!newsItems.length) {
        return <p>No news found.</p>; // or some placeholder component
    }

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                <div className={classes.News}> {/* apply the News class to the div */}
                    {newsItems.map((item, index) => (
                        <div className={classes.row} key={index}> {/* apply the row class to the div */}
                            <NewsItem data={item} />
                        </div>
                    ))}
                </div>
            </Section>
        </Animation>
    );
}
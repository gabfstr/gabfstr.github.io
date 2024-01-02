import React from 'react';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { NewsItem } from '../../components/NewsItem';
import { useLocalDataSource } from './data';
import { PageSection } from '../../types';
import * as classes from './style.module.css'; // import your CSS module

export function TeachingSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const teachingItems = response.allTeachingJson.nodes[0].teaching;

    if (!teachingItems.length) {
        return <p>No teaching found.</p>; // or some placeholder component
    }

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
            <div className={classes.Teaching}> {/* apply the News class to the div */}
                {teachingItems.map((item, index) => (
                    <div className={classes.row} key={index} > {/* apply the row class to the div */}
                        <NewsItem data={item} />
                    </div>
                ))}
            </div>
            </Section>
        </Animation>
    );
}
import React from 'react';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { useLocalDataSource } from './data';
import { PageSection } from '../../types';
import * as classes from './style.module.css';

export function ResearchSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const html = response.allResearchMarkdown.sections[0].html;

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <div className="research-content" dangerouslySetInnerHTML={{ __html: html || '' }} />
                    </div>
                </div>
            </Section>
        </Animation>
    );
}
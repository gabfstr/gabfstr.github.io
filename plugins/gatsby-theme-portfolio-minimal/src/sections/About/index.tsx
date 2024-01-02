import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Animation } from '../../components/Animation';
import { Section } from '../../components/Section';
import { useLocalDataSource } from './data';
import { PageSection } from '../../types';
import * as classes from './style.module.css';

export function AboutSection(props: PageSection): React.ReactElement {
    const response = useLocalDataSource();
    const data = response.allAboutMarkdown.sections[0];

    return (
        <Animation type="fadeUp">
            <Section anchor={props.sectionId} heading={props.heading}>
                <div className={classes.About}>
                    <div className={classes.Description} dangerouslySetInnerHTML={{ __html: data.html }} />
                    {data.frontmatter.imagetop && (
                        <Animation type="fadeLeft" delay={200}>
                            <div className={classes.ImageWrapper}>
                                <GatsbyImage
                                    image={data.frontmatter.imagetop.childImageSharp.gatsbyImageData}
                                    className={classes.Image}
                                    alt={data.frontmatter.imagetopAlt || `About Image`}
                                />
                                <GatsbyImage
                                    image={data.frontmatter.imagebot.childImageSharp.gatsbyImageData}
                                    className={classes.Image}
                                    alt={data.frontmatter.imagebotAlt || `About Image`}
                                />
                            </div>
                        </Animation>
                    )}
                </div>
            </Section>
        </Animation>
    );
}

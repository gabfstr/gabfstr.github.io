import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Page } from '../../components/Page';
import { Seo } from '../../components/Seo';
import { AuthorSnippet } from '../../components/AuthorSnippet';
import { ProjectPageTemplateData } from './data';
import * as classes from './style.module.css';
import { pluralize } from '../../utils/pluralize';

// Reference to the local prismjs theme (Modified)
require('../../globalStyles/prism.css');

interface ProjectPageTemplateProps {
    pageContext: {
        projectpage: ProjectPageTemplateData;
        listingPagePath: string;
        entityName?: string;
    };
}

export default function ProjectPageTemplate(props: ProjectPageTemplateProps): React.ReactElement {
    const projectpage = props.pageContext.projectpage;
    return (
        <>
            <Seo title={projectpage.title} description={projectpage.description || undefined} useTitleTemplate={true} />
            <Page>
                <projectpage className={classes.ProjectPage}>
                    <div className={classes.Breadcrumb}>
                        <Link
                            to={props.pageContext.listingPagePath}
                            title={`Back To All ${pluralize(props.pageContext.entityName) ?? 'Projects'}`}
                        >
                            <span className={classes.BackArrow}>&#10094;</span>
                            All {pluralize(props.pageContext.entityName) ?? 'Projects'}
                        </Link>
                    </div>
                    <section className={classes.Header}>
                        <span className={classes.Category}>{projectpage.categories.join(' / ')}</span>
                        <h1>{projectpage.title}</h1>
                        <div className={classes.Details}>
                            {projectpage.date}
                            <span className={classes.ReadingTime}>{projectpage.readingTime.text}</span>
                        </div>
                    </section>
                    {projectpage.banner && projectpage.banner.src && (
                        <section className={classes.Banner}>
                            <GatsbyImage
                                image={projectpage.banner.src.childImageSharp.gatsbyImageData}
                                alt={projectpage.banner.alt || `Image for ${projectpage.title}`}
                                imgClassName={classes.BannerImage}
                            />
                            {projectpage.banner.caption && (
                                <span
                                    className={classes.BannerCaption}
                                    dangerouslySetInnerHTML={{ __html: projectpage.banner.caption }}
                                />
                            )}
                        </section>
                    )}
                    <section className={classes.Body}>
                        <div className={classes.Content} dangerouslySetInnerHTML={{ __html: projectpage.body }} />
                        {projectpage.keywords &&
                            projectpage.keywords.map((keyword, key) => {
                                return (
                                    <span key={key} className={classes.Keyword}>
                                        {keyword}
                                    </span>
                                );
                            })}
                    </section>
                    <section className={classes.Footer}>
                        <AuthorSnippet />
                    </section>
                </projectpage>
            </Page>
        </>
    );
}

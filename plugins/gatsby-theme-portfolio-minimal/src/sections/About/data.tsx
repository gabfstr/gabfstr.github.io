import { graphql, useStaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface AboutSectionQueryResult {
    allAboutMarkdown: {
        sections: {
            frontmatter: {
                imagetopAlt?: string;
                imagetop?: {
                    childImageSharp: {
                        gatsbyImageData: IGatsbyImageData;
                    };
                };
            };
            html: string;
        }[];
    };
}

export const useLocalDataSource = (): AboutSectionQueryResult => {
    return useStaticQuery(graphql`
        query AboutSectionQuery {
            allAboutMarkdown: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sections/about/" } }) {
                sections: nodes {
                    frontmatter {
                        imagetopAlt
                        imagetop {
                            childImageSharp {
                                gatsbyImageData(width: 400)
                            }
                        }
                        imagebotAlt
                        imagebot {
                            childImageSharp {
                                gatsbyImageData(width: 400)
                            }
                        }
                    }
                    html
                }
            }
        }
    `);
};

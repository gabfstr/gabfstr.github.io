import { graphql, useStaticQuery } from 'gatsby';

interface ResearchSectionQueryResult {
    allResearchMarkdown: {
        sections: {
            html: string;
        }[];
    };
}

export const useLocalDataSource = (): ResearchSectionQueryResult => {
    return useStaticQuery(graphql`
        query ResearchSectionQuery {
            allResearchMarkdown: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/sections/research/" } }) {
                sections: nodes {
                    html
                }
            }
        }
    `);
};
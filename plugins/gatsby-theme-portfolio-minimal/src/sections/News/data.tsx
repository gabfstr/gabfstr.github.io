import { graphql, useStaticQuery } from 'gatsby';

interface NewsItem {
    date: string;
    color: string;
    content: string;
}

interface NewsSectionQueryResult {
    allNewsJson: {
        nodes: {
            news: NewsItem[];
        }[];
    };
}

export const useLocalDataSource = (): NewsSectionQueryResult => {
    return useStaticQuery(graphql`
        query NewsSectionQuery {
            allNewsJson {
                nodes {
                    news {
                        date
                        color
                        content
                    }
                }
            }
        }
    `);
};
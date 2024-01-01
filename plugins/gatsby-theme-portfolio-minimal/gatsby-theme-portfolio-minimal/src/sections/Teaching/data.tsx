import { graphql, useStaticQuery } from 'gatsby';

interface NewsItem {
    date: string;
    color: string;
    content: string;
}

interface TeachingSectionQueryResult {
    allTeachingJson: {
        nodes: {
            teaching: NewsItem[];
        }[];
    };
}

export const useLocalDataSource = (): TeachingSectionQueryResult => {
    return useStaticQuery(graphql`
        query TeachingSectionQuery {
            allTeachingJson {
                nodes {
                    teaching {
                        date
                        color
                        content
                    }
                }
            }
        }
    `);
};
module.exports = {
    // 1. The query needed by gatsby-node (createPages.js) to fetch a list of all slugs.
    // It is named ProjectListingQuery to match what createPages.js expects to import.
    ProjectListingQuery: `
        query ProjectListingQuery {
            # Uses the correct Gatsby-generated list field for markdown nodes
            allProjectPageMarkdown(sort: {frontmatter: {title: ASC}}) {
                projects: nodes {
                    slug
                    title
                    readingTime {
                        text
                    }
                    frontmatter {
                        conference
                    }
                }
            }
        }
    `,

    // 2. The query needed by the template component (index.tsx) to fetch ALL data for one page.
    // It is named ProjectTemplateQuery to match the TypeScript re-export in data.tsx.
    ProjectTemplateQuery: `
        query ProjectTemplateQuery($slug: String!) {
            # Queries a single node using the slug passed from createPages.js
            project: projectPageMarkdown(slug: { eq: $slug }) {
                body
                title
                slug
                readingTime {
                    text
                }
                # Fetches all required nested frontmatter fields
                frontmatter {
                    title
                    conference
                    equal_contribution_note
                    footer_note
                    poster_pdf
                    bibtex
                    
                    authors {
                        name
                        link
                        institutions
                        equal
                    }
                    institutions
                    
                    buttons {
                        arxiv_pdf
                        arxiv_abs
                        code
                        supplementary
                    }
                    
                    videos {
                        carousel_caption
                        teaser {
                            src
                            caption
                        }
                        carousel {
                            title
                            src
                        }
                    }

                    images {
                        caption
                        src 
                    }
                }
            }
        }
    `,
};


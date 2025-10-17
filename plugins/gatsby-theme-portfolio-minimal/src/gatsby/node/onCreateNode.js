const path = require('path');
const slugify = require('slugify');
const readingTime = require('reading-time');
const { createFilePath } = require('gatsby-source-filesystem');

module.exports = ({ node, getNode, actions, createNodeId, reporter }, options) => {
    const { createNode } = actions;
    
    // Check if the processed node is a Markdown file
    if (node.internal.type === 'MarkdownRemark' && node.parent) {
        
        const fileNode = getNode(node.parent);
        const relativeDir = fileNode.relativeDirectory;
        const markdownNode = node; // Renamed for clarity

        // 1. Handle ARTICLE nodes (from content/articles)
        if (/^articles[\/\\]/.test(relativeDir)) {
            
            if (!options.blogSettings || !options.blogSettings.path) {
                reporter.error(
                    `blogSettings are not correctly specified in gatsby-config.js. 
                    If articles should be generated based on the articles directory,
                    make sure that settings are correctly set up.`,
                );
                return;
            }

            const nodeFields = {
                // Pass 'articles' as the folder name to be stripped and use pathPrefix logic
                slug: createSlugForFolder({ node: markdownNode, getNode }, options, 'articles'), 
                title: markdownNode.frontmatter.title,
                description: markdownNode.frontmatter.description,
                date: markdownNode.frontmatter.date,
                categories: markdownNode.frontmatter.categories,
                keywords: markdownNode.frontmatter.keywords,
                readingTime: readingTime(markdownNode.rawMarkdownBody),
                banner:
                    markdownNode.frontmatter.banner !== undefined
                        ? {
                              src: markdownNode.frontmatter.banner.src,
                              alt: markdownNode.frontmatter.banner.alt,
                              caption: markdownNode.frontmatter.banner.caption,
                          }
                        : null,
            };

            createNode({
                ...nodeFields,
                id: createNodeId(`${node.id} >>> ArticleMarkdown`),
                parent: node.id,
                internal: {
                    type: 'ArticleMarkdown',
                    contentDigest: node.internal.contentDigest,
                },
            });
            return;
        }

        // 2. Handle PROJECT PAGE nodes (from content/projects)
        if (/^projects[\/\\]/.test(relativeDir)) {
            
            const projectNodeFields = {
                // Pass 'projects' as the folder name to be stripped. pathPrefix will be empty.
                slug: createSlugForFolder({ node: markdownNode, getNode }, options, 'projects'), 
                title: markdownNode.frontmatter.title,
                readingTime: readingTime(markdownNode.rawMarkdownBody),
            };

            createNode({
                ...projectNodeFields,
                id: createNodeId(`${node.id} >>> ProjectPageMarkdown`),
                parent: node.id,
                internal: {
                    type: 'ProjectPageMarkdown', // MUST match the type in createSchemaCustomization.js
                    contentDigest: node.internal.contentDigest,
                },
            });
            return;
        }
    }
};

function createSlugForFolder({ node, getNode }, options) {
    // By default, we use the path prefix option so that we get paths like ../blog/first-article
    const shouldNotUsePathPrefix = options.blogSettings && options.blogSettings.usePathPrefixForArticles === false;
    // Only if the user opts out or the blogSettings are not correctly specified, we switch to no path prefix
    const pathPrefix = shouldNotUsePathPrefix ? '' : options.blogSettings ? options.blogSettings.path : '';
    const contentDirectory = options.contentDirectory || path.join('.', 'content');
    // slug will be calculated based on the directory name where the md file is stored
    const filePath = createFilePath({ node, getNode, basePath: contentDirectory });
    // Since filePath is something like /articles/first-article, we have to remove the /articles/ part first
    const dirName = filePath.replace(/^\/articles/g, '');
    // Then, we can slugify the remaining folder name and can concatenate the pathPrefix
    return pathPrefix + slugify(dirName, { remove: /[*+~.()'"!:@]/g });
}
/**
 * Creates a slug for the node, dynamically handling path prefixes and folder stripping
 * based on the content type (folderName).
//  */
// function createSlugForFolder({ node, getNode }, options, folderName) { 
//     // Determine pathPrefix only if it's an 'articles' node and configuration allows it
//     const pathPrefix = (folderName === 'articles' && options.blogSettings && options.blogSettings.usePathPrefixForArticles !== false)
//         ? options.blogSettings ? options.blogSettings.path : ''
//         : ''; // Projects will have an empty pathPrefix
        
//     const contentDirectory = options.contentDirectory || path.join('.', 'content');
    
//     // Get full file path (e.g., /projects/my-project/ or /articles/my-article/)
//     const filePath = createFilePath({ node, getNode, basePath: contentDirectory });
    
//     // Dynamically remove the leading folder name (e.g., /projects/ or /articles/)
//     const regex = new RegExp(`^/${folderName}`, 'g');
//     const dirName = filePath.replace(regex, '');
    
//     // Concatenate the pathPrefix (if any) and the slugified name
//     return pathPrefix + slugify(dirName, { remove: /[*+~.()'"!:@]/g });
// }
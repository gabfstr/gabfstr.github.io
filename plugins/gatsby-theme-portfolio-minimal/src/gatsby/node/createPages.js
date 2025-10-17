const path = require('path');
const articleQuery = require('../../templates/Article/query');
const testQuery = require('../../templates/ProjectPages/query');

module.exports = async ({ graphql, actions, reporter }, options) => {
    const templateDir = path.join(__dirname, '../', '../', '../', 'src', 'templates');

    const articleResponse = await graphql(articleQuery.ArticleTemplateQuery);
    const articleData = articleResponse.data;

    if (!articleData && articleResponse.errors) {
        throw new Error(`Error while fetching article data, ${articleResponse.errors}`);
    } else if (articleData.allArticle.articles.length !== 0 && (!options.blogSettings || !options.blogSettings.path)) {
        throw new Error(`No path for ArticleListing page in gatsby-config specified`);
    } else if (articleData.allArticle.articles.length === 0 && !options.blogSettings) {
        reporter.info('Blog disabled, skipping articles page creation');
        return;
    }

    // Create ArticleListing page
    const articleListingPageSlug = options.blogSettings.path.replace(/\/\/+/g, '/'); // remove duplicate slashes
    reporter.info(`Creating ArticleListing page under ${articleListingPageSlug}`);
    actions.createPage({
        path: articleListingPageSlug,
        component: path.resolve(templateDir, 'ArticleListing', 'index.tsx'),
        context: {
            articles: articleData.allArticle.articles,
            entityName: options.blogSettings.entityName,
        },
    });

    // Create pages for each individual Article
    articleData.allArticle.articles.forEach((article) => {
        reporter.info(`Creating Article page under ${article.slug}`);
        actions.createPage({
            path: article.slug,
            component: path.resolve(templateDir, 'Article', 'index.tsx'),
            context: {
                article: article,
                listingPagePath: articleListingPageSlug,
                entityName: options.blogSettings.entityName,
            },
        });
    });
};

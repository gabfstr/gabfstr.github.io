module.exports = ({ actions }) => {
    actions.createTypes(`
    type InlineSvg {
        content: String
        originalContent: String
        dataURI: String
        absolutePath: String
        relativePath: String
    }
    type BannerImage {
        src: File @fileByRelativePath
        alt: String
        caption: String
    }
    type Image {
        src: File @fileByRelativePath
        alt: String
        objectFit: String
    }
    type LinkedImage {
        src: File @fileByRelativePath
        alt: String
        linkTo: String
        objectFit: String
    }
    type SocialProfiles {
        from: [String!]!
        showIcons: Boolean
    }
    type HeroSubtitle {
        prefix: String
        highlight: String
        suffix: String
    }
    type CalendlyIntegration {
        label: String
        username: String
        colorText: String
        colorButton: String
    }
    type Interest {
        label: String
        image: Image
    }
    type InterestsButton {
        visible: Boolean
        label: String
        initiallyShownInterests: Int
    }
    type ProjectLink {
        type: String
        url: String
    }
    type Project {
        visible: Boolean
        category: String
        title: String
        description: String
        tags: [String]
        image: LinkedImage
        links: [ProjectLink]
    }
    type ProjectButton {
        visible: Boolean
        label: String
        url: String
    }
    type Social {
        behance: String
        github: String
        medium: String
        linkedin: String
        mail: String
        twitter: String
        mastodon: String
        hashnode: String
        dribble: String
        twitch: String
        youtube: String
        instagram: String
        devto: String
        gitlab: String
        stackoverflow: String
        goodreads: String
        reddit: String
        discord: String
        patreon: String
        buymeacoffee: String
        untappd: String
        facebook: String
        googlescholar: String

    }
    type Logo {
        text: String
        image: File @fileByRelativePath
        imageDark: File @fileByRelativePath
    }
    type NewsItem implements Node {
        date: String!
        color: String!
        content: String!
    }
    type News{
        news: [NewsItem]
    }
    type Teaching{
        teaching: [NewsItem]
    }
    type NavigationItem {
        label: String
        url: String
    }
    type CallToActionButton {
        label: String
        url: String
        openNewTab: Boolean
    }
    type Footer {
        links: [NavigationItem]
        copyright: String
      }
    type Navigation {
        header: [NavigationItem]
        footer: Footer
        ctaButton: CallToActionButton
    }
    type FeatureToggles {
        useDarkModeAsDefault: Boolean
        useDarkModeBasedOnUsersPreference: Boolean
        useCookieBar: Boolean
    }
    type SiteMetadata {
        language: String
        siteUrl: String
        thumbnail: File @fileByRelativePath
        title: String
        titleTemplate: String
        description: String
        author: String
        avatar: File @fileByRelativePath
        bio: String
        social: Social
        googleBalise : String
    }
    type SiteConfiguration {
        logo: Logo
        navigation: Navigation
        featureToggles: FeatureToggles
    }
    type ReadingTimeStats {
        text: String
        minutes: Int
        time: Int
        words: Int
    }
    interface Article implements Node {
        id: ID!
        slug: String!
        title: String!
        description: String
        date: Date! @dateformat
        body: String!
        banner: BannerImage
        categories: [String!]!
        keywords: [String!]
        readingTime: ReadingTimeStats
    }
    type ArticleMarkdown implements Node & Article @dontInfer @childOf(type: "MarkdownRemark") {
        id: ID!
        slug: String!
        title: String!
        description: String
        date: Date! @dateformat
        body: String!
        banner: BannerImage
        categories: [String!]!
        keywords: [String!]
        readingTime: ReadingTimeStats
    }
    type Authors {
        name: String!
        link: String
        institutions: [Int!]
        equal: Boolean
    }
    type ButtonsList {
        arxiv_pdf: String
        arxiv_abs: String
        code: String
        supplementary: String
    }
    type TeaserVideo {
        src: String!
        caption: String
    }
    type CarouselVideo {
        title: String
        src: String!
    }
    type ProjectPageVideos {
        teaser: TeaserVideo
        carousel: [CarouselVideo!]
        carousel_caption: String
    }
    type ProjectPageImages {
        src: File @fileByRelativePath
        caption: String
    }
    type ProjectPageFrontmatter {
        title: String!
        authors: [Authors!]
        institutions: [String!]
        conference: String
        equal_contribution_note: String
        buttons: ButtonsList
        videos: ProjectPageVideos
        images: [ProjectPageImages!]
        poster_pdf: String
        bibtex: String
        footer_note: String
    }
    type ProjectPageMarkdown implements Node @dontInfer @childOf(type: "MarkdownRemark") {
        id: ID!
        slug: String!
        title: String!
        body: String! 
        readingTime: ReadingTimeStats
        frontmatter: ProjectPageFrontmatter
    }
    type MarkdownRemarkFrontmatter {
        imagetop: File @fileByRelativePath
        imagebot: File @fileByRelativePath
        imagetopAlt: String
        imagebotAlt: String
        sectionId: String
    }
    type MarkdownRemark implements Node {
        frontmatter: MarkdownRemarkFrontmatter
    }
    type ContactJson implements Node @dontInfer {
        name: String
        email: String
        description: String
        image: Image
        socialProfiles: SocialProfiles
    }
    type HeroJson implements Node @dontInfer {
        intro: String
        heroPhoto: Image
        image: Image
        title: String
        subtitle: HeroSubtitle
        description: String
        socialProfiles: SocialProfiles
        calendly: CalendlyIntegration
    }
    type InterestsJson implements Node @dontInfer {
        interests: [Interest]
        button: InterestsButton
    }
    type ProjectsJson implements Node @dontInfer {
        projects: [Project]
        button: ProjectButton
    }
    type ContentJson implements Node @dontInfer {
        siteMetadata: SiteMetadata
        siteConfiguration: SiteConfiguration
    }
  `);
};
